import { Axios } from "axios";
import { ResponseRaw } from "./lib/lxd/response";
import { Instance as InstanceType } from "./lib/lxd/instance";

export default class Instance {
    name: string;
    private requestClient: Axios;

    constructor(name: string, requestClient: Axios) {
        this.name = name;
        this.requestClient = requestClient;
    }

    get metadata(): Promise<InstanceType> {
        return new Promise(async (resolve, reject) => {
            try {
                const request = await this.requestClient.get(`/instances/${this.name}`);
                const response = request.data as ResponseRaw;
                return resolve(response.metadata as InstanceType);
            } catch (error) {
                return reject(error)
            }

        })
    }
    
}