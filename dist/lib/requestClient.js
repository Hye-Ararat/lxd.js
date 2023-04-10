import axios from "axios";
import { Agent } from "https";
export default function requestClient(config) {
    return axios.create(Object.assign({ httpsAgent: new Agent({
            rejectUnauthorized: false
        }) }, config));
}
