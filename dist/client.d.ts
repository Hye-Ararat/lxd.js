import { Axios } from "axios";
import Instance from "./instance";
import { InstanceFull } from "./lib/lxd/instance";
import Cluster from "./cluster";
import Instances from "./instances";
import Operations from "./operations";
import { Operation } from "./lib/lxd/operation";
import { Profile } from "./lib/lxd/profile";
import Profiles from "./profiles";
import { StoragePool } from "./lib/lxd/storagePool";
import StoragePools from "./storagePools";
import { Network } from "./lib/lxd/network";
export default class Client {
    private requestClient;
    constructor(requestClient: Axios);
    getInstances(recursion?: number): Promise<InstanceFull[] | Instance[]>;
    getOperations(): Promise<Operation[]>;
    getProfiles(): Promise<Profile[]>;
    getStoragePools(): Promise<StoragePool[]>;
    getNetworks(): Promise<Network[]>;
    get cluster(): Cluster;
    get instances(): Instances;
    get operations(): Operations;
    get profiles(): Profiles;
    get storagePools(): StoragePools;
}
