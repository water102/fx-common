type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export function allNamed<T extends Record<string, Promise<any>>>(
    nameToPromise: T
): Promise<{ [K in keyof T]: ThenArg<T[K]> }> {
    const entries = Object.entries(nameToPromise) as [keyof T, T[keyof T]][];

    return Promise.all(entries.map(([_, promise]) => promise)).then(results => {
        const resultObj = {} as { [K in keyof T]: ThenArg<T[K]> };
        entries.forEach(([key], i) => {
            resultObj[key] = results[i] as ThenArg<T[typeof key]>;
        });
        return resultObj;
    });
}