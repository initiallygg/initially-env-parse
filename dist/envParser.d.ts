type Environment = {
    [key: string]: {
        [key: string]: string;
    };
};
export declare function parseEnvFile(): Environment;
export {};
