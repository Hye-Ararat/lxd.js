export interface NetworkPut {
    config: object;
    description: string;
}
export interface Network extends NetworkPut {
    name: string;
    type: string;
    used_by: string[];
    managed: boolean;
    status: string;
    locations: string[];
}
