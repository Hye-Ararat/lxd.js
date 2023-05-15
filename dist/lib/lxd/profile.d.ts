export interface Profile extends ProfilePut {
    name: string;
    used_by: string[];
}
export interface ProfilePut {
    config: object;
    description: string;
    devices: object;
}
