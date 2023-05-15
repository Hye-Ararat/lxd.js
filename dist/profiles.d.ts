import { Axios } from "axios";
import Profile from "./profile";
export default class Profiles {
    private requestClient;
    constructor(requestClient: Axios);
    profile(name: string): Profile;
}
