import { __awaiter } from "tslib";
export default class Profile {
    constructor(name, requestClient) {
        this.name = name;
        this.requestClient = requestClient;
    }
    metadata() {
        return __awaiter(this, void 0, void 0, function* () {
            let request = yield this.requestClient.get(`/profiles/${this.name}`);
            let response = request.data;
            return response.metadata;
        });
    }
}
