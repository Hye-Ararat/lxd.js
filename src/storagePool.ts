import { Axios } from "axios";
import { ResponseRaw } from "./lib/lxd/response";
import { StorageVolume } from "./lib/lxd/storagePool";

export default class StoragePool {
    private name: string;
    private requestClient: Axios;

    constructor(name: string, requestClient: Axios) {
        this.name = name;
        this.requestClient = requestClient
    }
    async getVolumes() {
        const request = await this.requestClient.get(`/storage-pools/${this.name}/volumes?recursion=1`);
        const response = request.data as ResponseRaw;
        return response.metadata as StorageVolume[];
    }
}