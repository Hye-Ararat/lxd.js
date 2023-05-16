import { Axios } from "axios";

export default class StoragePool {
    private name: string;
    private requestClient: Axios;

    constructor(name: string, requestClient: Axios) {
        this.name = name;
        this.requestClient = requestClient
    }
}