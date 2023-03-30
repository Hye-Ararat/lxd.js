import {Axios} from "axios";
import Instance from "./instance";
import {InstanceFull} from "./lib/lxd/instance";
import { ResponseRaw } from "./lib/lxd/response";

export default function client(requestClient: Axios) {
    return {
        instances: async () => {
            const request = await requestClient.get("/instances?recursion=2");
            const response = request.data as ResponseRaw;
            return response.metadata as InstanceFull[];
        },
        instance: (name: string) => Instance(name, requestClient)
    }
}