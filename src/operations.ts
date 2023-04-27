import { Axios } from "axios";
import Operation from "./operation";

export default class Operations {
    private requestClient: Axios;

    constructor(requestClient: Axios) {
        this.requestClient = requestClient;
    }
    operation(id: string) {
        return new Operation(id, this.requestClient)
    }
}