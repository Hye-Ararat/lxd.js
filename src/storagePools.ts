import { Axios } from "axios";
import StoragePool from "./storagePool";

export default class StoragePools {
    private requestClient: Axios;

    async storagePool(name: string) {
        return new StoragePool(name, this.requestClient);
    }

    constructor(requestClient: Axios) {
        this.requestClient = requestClient;
    }
}