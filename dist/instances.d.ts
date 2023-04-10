import { Axios } from "axios";
import Instance from "./instance";
export default class Instances {
    private requestClient;
    constructor(requestClient: Axios);
    instance(name: string): Instance;
}
