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
    connectConsole(type, height, width) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = yield this.requestClient.post(`/instances/${this.name}/console`, {
                type: type ? type : "console",
                height,
                width,
                interactive: true
            });
            let response = request.data;
            return response.metadata;
        });
    }
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            let request = yield this.requestClient.get(`/instances/${this.name}/state`);
            let response = request.data;
            return response.metadata;
        });
    }
}
