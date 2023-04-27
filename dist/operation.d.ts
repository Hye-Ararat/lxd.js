import { Axios } from "axios";
export default class Operation {
    private id;
    private requestClient;
    constructor(id: string, requestClient: Axios);
    getState(): Promise<any>;
}
