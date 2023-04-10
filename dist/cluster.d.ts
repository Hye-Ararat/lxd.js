import { Axios } from "axios";
export default class Cluster {
    private requestClient;
    constructor(requestClient: Axios);
    updateCertificate(clusterCertificate: string, clusterCertificateKey: string): Promise<void>;
}
