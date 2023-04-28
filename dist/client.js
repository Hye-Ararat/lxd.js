import { __awaiter } from "tslib";
import Cluster from "./cluster";
import Instances from "./instances";
import Operations from "./operations";
export default class Client {
    constructor(requestClient) {
        this.requestClient = requestClient;
    }
    getInstances(recursion) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this.requestClient.get(`/instances?recursion=${recursion || 1}`);
            const response = request.data;
            return recursion == 2 ? response.metadata : response.metadata;
        });
    }
    get cluster() {
        return new Cluster(this.requestClient);
    }
    get instances() {
        return new Instances(this.requestClient);
    }
    get operations() {
        return new Operations(this.requestClient);
    }
}
