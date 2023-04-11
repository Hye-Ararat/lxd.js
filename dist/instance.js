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
}