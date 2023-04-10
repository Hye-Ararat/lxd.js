"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const https_1 = require("https");
function requestClient(config) {
    return axios_1.default.create(Object.assign({ httpsAgent: new https_1.Agent({
            rejectUnauthorized: false
        }) }, config));
}
exports.default = requestClient;
