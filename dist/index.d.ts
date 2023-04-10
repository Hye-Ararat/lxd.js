import client from "./client";
export declare function connectOIDC(url: string, accessToken: string, refreshToken?: string): client;
export declare function connectUnix(path: string): client;
