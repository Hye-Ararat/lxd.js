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

export interface StorageVolume extends StorageVolumePut {
    name: string;
    type: string;
    used_by: string[];
    location: string;
    content_type: string;
    project: string;
    created_at: string;
}

export interface StorageVolumePut {
    config: object;
    description: string;
}