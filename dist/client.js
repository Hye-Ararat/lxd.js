import { __awaiter } from "tslib";
import Cluster from "./cluster";
import Instances from "./instances";
export default class Client {
    constructor(requestClient) {
        this.requestClient = requestClient;
    }
    getInstances() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this.requestClient.get("/instances?recursion=2");
            const response = request.data;
            return response.metadata;
        });
    }
    get cluster() {
        return new Cluster(this.requestClient);
    }
    get instances() {
        return new Instances(this.requestClient);
    }
}
