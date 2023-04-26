import { Axios, AxiosError } from "axios";
import { ResponseRaw } from "./lib/lxd/response";
import { Instance as InstanceType } from "./lib/lxd/instance";

export default class Instance {
    name: string;
    private requestClient: Axios;

    constructor(name: string, requestClient: Axios) {
        this.name = name;
        this.requestClient = requestClient;
    }

    metadata(recur?: boolean): Promise<InstanceType> {
        return new Promise(async (resolve, reject) => {
            let request;
            try {
                 request = await this.requestClient.get(`/instances/${this.name}` + (recur ? "?recursion=1" : ""));
            } catch (error) {
                return reject(error);
            }
            let response = request.data as ResponseRaw;
            return resolve(response.metadata as InstanceType);

        })
    }

    async changeState(action: "start" | "stop" | "restart", force?: boolean, stateful?: boolean, timeout?: number) {
        if (!force) force = false;
        if (!stateful) stateful = false;
        if (!timeout) timeout = 30;
        let request = await this.requestClient.put(`/instances/${this.name}/state`, {
            action,
            force,
            stateful,
            timeout
        });
        let response = request.data as ResponseRaw;
        return response.metadata;

    }
    async connectConsole(type?: string, height?: number, width?: number) {
        let request = await this.requestClient.post(`/instances/${this.name}/console`, {
            type: type ? type : "console",
            height,
            width
        })
        let response = request.data as ResponseRaw;
        return response.metadata;
    }
    async getState() {
        let request = await this.requestClient.get(`/instances/${this.name}/state`);
        let response = request.data as ResponseRaw;
        return response.metadata;
    }
    
}