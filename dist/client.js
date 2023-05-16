import { __awaiter } from "tslib";
import Cluster from "./cluster";
import Instances from "./instances";
import Operations from "./operations";
import Profiles from "./profiles";
import StoragePools from "./storagePools";
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
    getOperations() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this.requestClient.get(`/operations?recursion=1`);
            const response = request.data;
            return response.metadata;
        });
    }
    getProfiles() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this.requestClient.get(`/profiles?recursion=1`);
            const response = request.data;
            return response.metadata;
        });
    }
    getStoragePools() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this.requestClient.get(`/storage-pools?recursion=1`);
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
    get operations() {
        return new Operations(this.requestClient);
    }
    get profiles() {
        return new Profiles(this.requestClient);
    }
    get storagePools() {
        return new StoragePools(this.requestClient);
    }
}
