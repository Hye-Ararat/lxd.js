import { Axios } from "axios";
import { ResponseRaw } from "./lib/lxd/response";

export default class Profile {
    name: string;
    private requestClient: Axios;
    constructor(name: string, requestClient: Axios) {
        this.name = name;
        this.requestClient = requestClient;
    }
    async metadata() {
        let request = await this.requestClient.get(`/profiles/${this.name}`);
        let response = request.data as ResponseRaw;
        return response.metadata as Profile;
    }
}