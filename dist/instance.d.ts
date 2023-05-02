import { Axios } from "axios";
import { Instance as InstanceType } from "./lib/lxd/instance";
export default class Instance {
    name: string;
    private requestClient;
    constructor(name: string, requestClient: Axios);
    metadata(recur?: boolean): Promise<InstanceType>;
    getState(): Promise<any>;
    changeState(action: "start" | "stop" | "restart", force?: boolean, stateful?: boolean, timeout?: number): Promise<any>;
    connectConsole(type?: string, height?: number, width?: number): Promise<any>;
    getFile(path: string): Promise<object>;
    getFileMetadata(path: string): Promise<object>;
    createOrReplaceFile(path: string, contents: string, ownerUid?: string, ownerGid?: string, fileMode?: string, writeMode?: "overwrite" | "append"): Promise<void>;
    deleteFile(path: string): Promise<void>;
}
