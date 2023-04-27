import { __awaiter } from "tslib";
export default class Operation {
    constructor(id, requestClient) {
        this.id = id;
        this.requestClient = requestClient;
    }
    getState() {
        return __awaiter(this, void 0, void 0, function* () {
            let request = yield this.requestClient.get(`/operations/${this.id}`);
            let response = request.data;
            return response.metadata;
        });
    }
}
