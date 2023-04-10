"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instance_1 = require("./instance");
class Instances {
    constructor(requestClient) {
        this.requestClient = requestClient;
    }
    instance(name) {
        return new instance_1.default(name, this.requestClient);
    }
}
exports.default = Instances;
