import { Axios } from "axios";
import { ResponseRaw } from "./lib/lxd/response";
import { Instance as InstanceType } from "./lib/lxd/instance";

export default function Instance(name: string, requestClient: Axios) {
    return {
        getData: async () => {
            const request = await requestClient.get(`/instances/${name}`);
            const response = request.data as ResponseRaw;
            return response.metadata as InstanceType;
        },
    }
}