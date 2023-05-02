import { __awaiter } from "tslib";
export default class Instance {
    constructor(name, requestClient) {
        this.name = name;
        this.requestClient = requestClient;
    }
    metadata(recur) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let request;
            try {
                request = yield this.requestClient.get(`/instances/${this.name}` + (recur ? "?recursion=1" : ""));
            }
            catch (error) {
                return reject(error);
            }
            let response = request.data;
            return resolve(response.metadata);
        }));
    }
    //States
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            let request = yield this.requestClient.get(`/instances/${this.name}/state`);
            let response = request.data;
            return response.metadata;
        });
    }
    changeState(action, force, stateful, timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!force)
                force = false;
            if (!stateful)
                stateful = false;
            if (!timeout)
                timeout = 30;
            let request = yield this.requestClient.put(`/instances/${this.name}/state`, {
                action,
                force,
                stateful,
                timeout
            });
            let response = request.data;
            return response.metadata;
        });
    }
    //Console
    connectConsole(type, height, width) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = yield this.requestClient.post(`/instances/${this.name}/console`, {
                type: type ? type : "console",
                height,
                width,
            });
            let response = request.data;
            return response.metadata;
        });
    }
    //Files
    getFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = yield this.requestClient.get(`/instances/${this.name}/files?path=${path}`);
            let response = {
                data: request.data,
                metadata: {
                    uid: request.headers["x-lxd-uid"],
                    gid: request.headers["x-lxd-gid"],
                    mode: request.headers["x-lxd-mode"],
                    type: request.headers["x-lxd-type"],
                    modified: request.headers["x-lxd-modified"],
                }
            };
            if (response.metadata.type == "directory") {
                //@ts-ignore
                response.data = response.data["metadata"];
            }
            return response;
        });
    }
    getFileMetadata(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = yield this.requestClient.head(`/instances/${this.name}/files?path=${path}`);
            let response = {
                uid: request.headers["x-lxd-uid"],
                gid: request.headers["x-lxd-gid"],
                mode: request.headers["x-lxd-mode"],
                type: request.headers["x-lxd-type"],
                modified: request.headers["x-lxd-modified"],
            };
            return response;
        });
    }
    createOrReplaceFile(path, contents, ownerUid, ownerGid, fileMode, writeMode) {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = {};
            //@ts-ignore
            if (ownerUid)
                headers["X-LXD-uid"] = ownerUid;
            //@ts-ignore
            if (ownerGid)
                headers["X-LXD-gid"] = ownerGid;
            //@ts-ignore
            if (fileMode)
                headers["X-LXD-mode"] = fileMode;
            //@ts-ignore
            if (writeMode)
                headers["X-LXD-write"] = writeMode;
            yield this.requestClient.post(`/instances/${this.name}/files?path=${path}`, contents, {
                headers: headers
            });
            return;
        });
    }
    deleteFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.requestClient.delete(`/instances/${this.name}/files?path=${path}`);
            return;
        });
    }
}
