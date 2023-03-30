import axios, {AxiosRequestConfig} from "axios";
import {Agent} from "https";

export default function requestClient(config: AxiosRequestConfig) {
    return axios.create({
        httpsAgent: new Agent({
            rejectUnauthorized: false
        }),
        ...config
    });
}