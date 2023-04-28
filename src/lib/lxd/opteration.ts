import { StatusCode } from "./client";

export interface Operation {
    id: string;
    class: "task" | "token" | "websocket";
    created_at: string;
    updated_at: string;
    status: string;
    status_code: StatusCode;
    resources: object;
    metadata: object;
    may_cancel: boolean;
    err: string;
    location: string;
}