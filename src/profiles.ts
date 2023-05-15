import { Axios } from "axios";
import Profile from "./profile";

export default class Profiles {
    private requestClient: Axios;

    constructor(requestClient: Axios) {
        this.requestClient = requestClient;
    }
    profile(name: string) {
        return new Profile(name, this.requestClient);
    }
}