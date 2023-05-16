import { Axios } from "axios";

export default class StoragePools {
    private requestClient: Axios;

    constructor(requestClient: Axios) {
        this.requestClient = requestClient;
    }
}