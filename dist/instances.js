import Instance from "./instance";
export default class Instances {
    constructor(requestClient) {
        this.requestClient = requestClient;
    }
    instance(name) {
        return new Instance(name, this.requestClient);
    }
}
