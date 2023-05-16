import { __awaiter } from "tslib";
export default class StoragePool {
    constructor(name, requestClient) {
        this.name = name;
        this.requestClient = requestClient;
    }
    getVolumes() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this.requestClient.get(`/storage-pools/${this.name}/volumes?recursion=1`);
            const response = request.data;
            return response.metadata;
        });
    }
}
