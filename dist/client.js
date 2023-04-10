"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = require("./cluster");
const instances_1 = require("./instances");
class Client {
    constructor(requestClient) {
        this.requestClient = requestClient;
    }
    getInstances() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield this.requestClient.get("/instances?recursion=2");
            const response = request.data;
            return response.metadata;
        });
    }
    get cluster() {
        return new cluster_1.default(this.requestClient);
    }
    get instances() {
        return new instances_1.default(this.requestClient);
    }
}
exports.default = Client;
