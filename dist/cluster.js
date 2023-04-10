import { __awaiter } from "tslib";
export default class Cluster {
    constructor(requestClient) {
        this.requestClient = requestClient;
    }
    updateCertificate(clusterCertificate, clusterCertificateKey) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.requestClient.post("/cluster/certificate", {
                    cluster_certificate: clusterCertificate,
                    cluster_certificate_key: clusterCertificateKey
                });
            }
            catch (error) {
                let err = error;
                throw new Error(err);
            }
        });
    }
}
