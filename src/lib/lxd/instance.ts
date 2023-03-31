import { StatusCode } from "./client";

export interface InstanceFull extends Instance {
    backups: InstanceBackup[];
    state: InstanceState;
    snapshots: InstanceSnapshot[];
}

export interface Instance extends InstancePut {
    created_at: string;
    expanded_config: object;
    expanded_devices: object;
    name: string;
    status: string;
    status_code: StatusCode;
    last_used_at: string;
    location: string;
    type: "container" | "virtual-machine";
    project: string;
}

export interface InstancePut {
    architecture: string;
    config: object;
    devices: object;
    ephemeral: boolean;
    profiles: string[];
    restore: string;
    stateful: boolean;
    description: string;
}







export interface InstanceState {
    status: string;
    status_code: StatusCode;
    disk: {
        [key: string]: InstanceStateDisk;
    },
    memory: InstanceStateMemory;
    network: {
        [key: string]: InstanceStateNetwork;
    }
    pid: number;
    processes: number;
    cpu: InstanceStateCPU;
}

export interface InstanceStateDisk {
    usage: number;
}

export interface InstanceStateMemory {
    usage: number;
    usage_peak: number;
    swap_usage: number;
    swap_usage_peak: number;
}

export interface InstanceStateNetwork {
    addresses: InstanceStateNetworkAddress[];
    counters: InstanceStateNetworkCounters;
    hwaddr: string;
    mtu: number;
    state: "down" | "up";
    type: string;
}

export interface InstanceStateCPU {
    usage: number;
}

export interface InstanceStateNetworkAddress {
    family: string;
    address: string;
    netmask: string;
    scope: string;
}

export interface InstanceStateNetworkCounters {
    bytes_received: number;
    bytes_sent: number;
    packets_received: number;
    packets_sent: number;
    errors_received: number;
    errors_sent: number;
    packets_dropped_outbound: number;
    packets_dropped_inbound: number;
}







export interface InstanceBackup {
    name: string;
    created_at: string;
    expires_at: string;
    instance_only: boolean;
    container_only: boolean;
    optimized_storage: boolean;
}

export interface InstanceSnapshot extends InstanceSnapshotPut {
    architecture: string;
    config: Object;
    created_at: string;
    devices: Object;
    ephemeral: boolean;
    expanded_config: Object;
    expanded_devices: Object;
    last_used_at: string;
    name: string;
    profiles: string[];
    stateful: boolean;
    size: number;

}

export interface InstanceSnapshotPut {
    expires_at: string;
}