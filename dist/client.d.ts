import { Axios } from "axios";
import Instance from "./instance";
import { InstanceFull } from "./lib/lxd/instance";
import Cluster from "./cluster";
import Instances from "./instances";
import Operations from "./operations";
import { Operation } from "./lib/lxd/opteration";
export default class Client {
    private requestClient;
    constructor(requestClient: Axios);
    getInstances(recursion?: number): Promise<InstanceFull[] | Instance[]>;
    getOperations(): Promise<Operation[]>;
    get cluster(): Cluster;
    get instances(): Instances;
    get operations(): Operations;
}
