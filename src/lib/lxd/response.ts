import { StatusCode } from "./client";

export type ResponseType = "sync" | "async" | "error";

export interface ResponseRaw {
    type: ResponseType;
    status: string;
    status_code: StatusCode;
    operation: string;
    error_code: number;
    error: string;
    metadata: any;
}

export interface Response {
    type: ResponseType;
    status: string;
    status_code: StatusCode;
    operation: string;
    error_code: number;
    error: string;
    metadata: Object;
}

