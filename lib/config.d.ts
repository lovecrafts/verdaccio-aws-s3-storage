import { Config } from '@verdaccio/types';
export interface S3Config extends Config {
    bucket: string;
    keyPrefix: string;
    endpoint?: string;
    region?: string;
    s3ForcePathStyle?: boolean;
    acl?: string;
    tarballACL?: string;
    accessKeyId?: string;
    secretAccessKey?: string;
    sessionToken?: string;
}
