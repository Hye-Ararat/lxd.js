export interface StoragePool extends StoragePoolPut {
    name: string;
    driver: string;
    used_by: string[];
    status: string;
    locations: string[]
}

export interface StoragePoolPut {
    config: object;
    description: string;
}