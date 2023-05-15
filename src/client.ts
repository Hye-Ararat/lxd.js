import { Axios } from "axios";
import Instance from "./instance";
import { InstanceFull } from "./lib/lxd/instance";
import { ResponseRaw } from "./lib/lxd/response";
import Cluster from "./cluster";
import Instances from "./instances";
import Operations from "./operations";
import { Operation } from "./lib/lxd/operation";
import {Profile} from "./lib/lxd/profile";
import Profiles from "./profiles";

export default class Client {
    private requestClient: Axios;
    constructor(requestClient: Axios) {
        this.requestClient = requestClient;
    }
    async getInstances(recursion?: number): Promise<InstanceFull[] | Instance[]> {
        const request = await this.requestClient.get(`/instances?recursion=${recursion || 1}`);
        const response = request.data as ResponseRaw;
        return recursion == 2 ? response.metadata as InstanceFull[] : response.metadata as Instance[];
    }
    async getOperations(): Promise<Operation[]> {
        const request = await this.requestClient.get(`/operations?recursion=1`);
        const response = request.data as ResponseRaw;
        return response.metadata as Operation[];
    }
    async getProfiles(): Promise<Profile[]> {
        const request = await this.requestClient.get(`/profiles?recursion=1`);
        const response = request.data as ResponseRaw;
        return response.metadata as Profile[];
    }

    get cluster() {
        return new Cluster(this.requestClient);
    }
    get instances() {
        return new Instances(this.requestClient);
    }
    get operations() {
        return new Operations(this.requestClient);
    }
    get profiles() {
        return new Profiles(this.requestClient);
    }
}