import { Axios } from "axios";
import { InstanceFull } from "./lib/lxd/instance";
import { ResponseRaw } from "./lib/lxd/response";
import Instance from "./instance";

export default class Instances {
    private requestClient: Axios;

    constructor(requestClient: Axios) {
        this.requestClient = requestClient;
    }
    instance(name: string) {
        return new Instance(name, this.requestClient);
    }
}