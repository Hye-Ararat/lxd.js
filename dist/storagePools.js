import { __awaiter } from "tslib";
import StoragePool from "./storagePool";
export default class StoragePools {
    storagePool(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new StoragePool(name, this.requestClient);
        });
    }
    constructor(requestClient) {
        this.requestClient = requestClient;
    }
}
