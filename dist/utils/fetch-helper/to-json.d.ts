export declare const toJson: <T = any>(res: {
    [key: string]: any;
    json: () => Promise<T>;
}) => Promise<T>;
