export declare const toText: <T>(res: {
    [key: string]: any;
    text: () => Promise<T>;
}) => Promise<T>;
