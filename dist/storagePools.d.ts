import { Axios } from "axios";
import StoragePool from "./storagePool";
export default class StoragePools {
    private requestClient;
    storagePool(name: string): StoragePool;
    constructor(requestClient: Axios);
}
