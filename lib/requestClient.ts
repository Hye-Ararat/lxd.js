import axios, {AxiosRequestConfig} from "axios";

export default function requestClient(config: AxiosRequestConfig) {
    return axios.create(config);
}