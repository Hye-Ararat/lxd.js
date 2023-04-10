import { __awaiter } from "tslib";
import requestClient from "./lib/requestClient";
import client from "./client";
import { Issuer } from 'openid-client';
export function connectOIDC(url, accessToken, refreshToken) {
    const reqClient = requestClient({});
    reqClient.interceptors.request.use((request) => __awaiter(this, void 0, void 0, function* () {
        request.headers.Authorization = `Bearer ${accessToken}`;
        request.headers["X-LXD-oidc"] = "true";
        request.baseURL = url + "/1.0";
        return request;
    }));
    reqClient.interceptors.response.use((response) => __awaiter(this, void 0, void 0, function* () {
        return response;
    }), (error) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (error.response.data) {
            if (error.response.data["error"]) {
                if (error.response.data["error"] == "invalid token") {
                    if (refreshToken) {
                        const oidcIssuer = yield Issuer.discover(error.response.data.metadata["issuer"]);
                        const oidcClient = new oidcIssuer.Client({
                            client_id: error.response.data.metadata["client_id"],
                            token_endpoint_auth_method: "none"
                        });
                        let newSet = yield oidcClient.refresh(refreshToken);
                        if (newSet.access_token && newSet.refresh_token) {
                            accessToken = newSet.access_token;
                            refreshToken = newSet.refresh_token;
                            return yield reqClient(error.config);
                        }
                        else {
                            return error;
                        }
                    }
                }
            }
        }
        let err = error;
        throw new Error((_a = err.response) === null || _a === void 0 ? void 0 : _a.data.metadata);
    }));
    return new client(reqClient);
}
export function connectUnix(path) {
    const reqClient = requestClient({
        socketPath: path,
        baseURL: "/1.0"
    });
    return new client(reqClient);
}
