import { Axios, AxiosError } from "axios";
import { ResponseRaw } from "./lib/lxd/response";

export default class Cluster {
    private requestClient;
    constructor(requestClient: Axios) {
        this.requestClient = requestClient;
    }

    async updateClusterCertificate(clusterCertificate: string, clusterCertificateKey: string) {
        try {
            await this.requestClient.post("/cluster/certificate", {
                cluster_certificate: clusterCertificate,
                cluster_certificate_key: clusterCertificateKey
            })
        } catch (error) {
            let err = error as AxiosError<ResponseRaw, Axios>;
            throw new Error(err.response?.data.error);
        }
    }

}