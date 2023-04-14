import { Axios } from "axios";
import { Instance as InstanceType } from "./lib/lxd/instance";
export default class Instance {
    name: string;
    private requestClient;
    constructor(name: string, requestClient: Axios);
    metadata(recur?: boolean): Promise<InstanceType>;
    changeState(action: "start" | "stop" | "restart", force?: boolean, stateful?: boolean, timeout?: number): Promise<any>;
}
