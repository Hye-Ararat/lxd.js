import { Axios } from "axios";
import Instance from "./instance";
import { InstanceFull } from "./lib/lxd/instance";
import { ResponseRaw } from "./lib/lxd/response";
import Cluster from "./cluster";
import Instances from "./instances";

export default class Client {
    private requestClient: Axios;
    constructor(requestClient: Axios) {
        this.requestClient = requestClient;
    }
    async getInstances(): Promise<InstanceFull[]> {
        const request = await this.requestClient.get("/instances?recursion=2");
        const response = request.data as ResponseRaw;
        return response.metadata as InstanceFull[];
    }
    get cluster() {
        return new Cluster(this.requestClient);
    }
    get instances() {
        return new Instances(this.requestClient);
    }
}