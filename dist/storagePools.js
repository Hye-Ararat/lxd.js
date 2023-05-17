import StoragePool from "./storagePool";
export default class StoragePools {
    storagePool(name) {
        return new StoragePool(name, this.requestClient);
    }
    constructor(requestClient) {
        this.requestClient = requestClient;
    }
}
