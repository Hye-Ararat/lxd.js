import { Axios } from "axios";
export default class Profile {
    name: string;
    private requestClient;
    constructor(name: string, requestClient: Axios);
    metadata(): Promise<Profile>;
}
