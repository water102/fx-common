export type CancelablePromise<T> = {
    promise: Promise<T>;
    cancel: () => void;
};
export declare function makeCancelablePromise<T>(promise: Promise<T>): CancelablePromise<T>;
//# sourceMappingURL=make-cancelable-promise.d.ts.map