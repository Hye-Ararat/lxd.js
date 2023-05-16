import { Axios } from "axios";
import { StorageVolume } from "./lib/lxd/storagePool";
export default class StoragePool {
    private name;
    private requestClient;
    constructor(name: string, requestClient: Axios);
    getVolumes(): Promise<StorageVolume[]>;
}
