import { Axios } from "axios";
import Operation from "./operation";
export default class Operations {
    private requestClient;
    constructor(requestClient: Axios);
    operation(id: string): Operation;
}
