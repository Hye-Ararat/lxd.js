import { Axios } from "axios";
import { ResponseRaw } from "./lib/lxd/response";
import {Operation as OperationType} from "./lib/lxd/opteration";

export default class Operation {
    private id: string;
    private requestClient: Axios;

    constructor(id: string, requestClient: Axios) {
        this.id = id;
        this.requestClient = requestClient;
    }

    async getState(){
        let request = await this.requestClient.get(`/operations/${this.id}`);
        let response = request.data as ResponseRaw;
        return response.metadata as Operation;
    }
}