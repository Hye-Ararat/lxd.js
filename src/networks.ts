import { Axios } from "axios";


export default class Networks {
    private requestClient: Axios;
    constructor(requestClient: Axios) {
        this.requestClient = requestClient;
    }
}