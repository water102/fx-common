type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;
export declare function allNamed<T extends Record<string, Promise<any>>>(nameToPromise: T): Promise<{
    [K in keyof T]: ThenArg<T[K]>;
}>;
export {};
