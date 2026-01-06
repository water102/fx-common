export declare const toJson: <T = any>(res: {
    json: () => Promise<T>;
    [key: string]: any;
}) => Promise<T>;
