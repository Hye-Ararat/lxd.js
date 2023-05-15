import Profile from "./profile";
export default class Profiles {
    constructor(requestClient) {
        this.requestClient = requestClient;
    }
    profile(name) {
        return new Profile(name, this.requestClient);
    }
}
