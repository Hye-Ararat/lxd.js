import { Axios } from "axios";
import { Operation as OperationType } from "./lib/lxd/opteration";
export default class Operation {
    private id;
    private requestClient;
    constructor(id: string, requestClient: Axios);
    getState(): Promise<OperationType>;
}
