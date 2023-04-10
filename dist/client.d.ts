import { Axios } from "axios";
import { InstanceFull } from "./lib/lxd/instance";
import Cluster from "./cluster";
import Instances from "./instances";
export default class Client {
    private requestClient;
    constructor(requestClient: Axios);
    getInstances(): Promise<InstanceFull[]>;
    get cluster(): Cluster;
    get instances(): Instances;
}
