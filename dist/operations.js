import Operation from "./operation";
export default class Operations {
    constructor(requestClient) {
        this.requestClient = requestClient;
    }
    operation(id) {
        return new Operation(id, this.requestClient);
    }
}
