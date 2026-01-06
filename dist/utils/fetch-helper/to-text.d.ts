export declare const toText: <T>(res: {
    text: () => Promise<T>;
    [key: string]: any;
}) => Promise<T>;
