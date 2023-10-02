export type CancelablePromise<T> = {
    promise: Promise<T>;
    cancel: () => void;
};
export declare function makeCancelablePromise<T>(promise: Promise<T>): CancelablePromise<T>;
