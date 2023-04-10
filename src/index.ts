import requestClient from "./lib/requestClient";
import client from "./client";
import { Issuer } from 'openid-client';
import { Axios, AxiosError } from "axios";
import { ResponseRaw } from "./lib/lxd/response";

export function connectOIDC(url: string, accessToken: string, refreshToken?: string) {
    const reqClient = requestClient({});

    reqClient.interceptors.request.use(async (request) => {
        request.headers.Authorization = `Bearer ${accessToken}`;
        request.headers["X-LXD-oidc"] = "true";
        request.baseURL = url + "/1.0";
        return request;
    })

    reqClient.interceptors.response.use(async (response) => {
        return response;
    }, async (error) => {
        if (error.response.data) {
            if (error.response.data["error"]) {
                if (error.response.data["error"] == "invalid token") {
                    if (refreshToken) {
                        const oidcIssuer = await Issuer.discover(error.response.data.metadata["issuer"]);
                        const oidcClient = new oidcIssuer.Client({
                            client_id: error.response.data.metadata["client_id"],
                            token_endpoint_auth_method: "none"
                        });
                        let newSet = await oidcClient.refresh(refreshToken);
                        if (newSet.access_token && newSet.refresh_token) {
                            accessToken = newSet.access_token;
                            refreshToken = newSet.refresh_token;
                            return await reqClient(error.config);
                        } else {
                            return error;
                        }
                    }
                }
            }
        }
        let err = error as AxiosError<ResponseRaw, Axios>
        throw new Error(err.response?.data.metadata);
    })
    return new client(reqClient);
}

export function connectUnix(path: string) {
    const reqClient = requestClient({
        socketPath: path
    })
    return new client(reqClient);
}