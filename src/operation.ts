import { Axios } from "axios";

export default class Operation {
    private id: string;
    private requestClient: Axios;

    constructor(id: string, requestClient: Axios) {
        this.id = id;
        this.requestClient = requestClient;
    }

    async getState(){
        let request = await this.requestClient.get(`/operations/${this.id}`);
        let response = request.data;
        return response.metadata;
    }
}