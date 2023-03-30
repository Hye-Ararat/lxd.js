import requestClient from "../lib/requestClient";
import client from "./client";

export function connectOIDC(url: string, accessToken: string) {
    const reqClient = requestClient({
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "X-LXD-oidc": "true"
        },
        baseURL: url + "/1.0"
    });
    return client(reqClient);
}