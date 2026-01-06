import { CancelablePromise } from './cancelable-promise';
export declare const cancelableFetch: (input: string | URL | Request, init?: RequestInit | undefined) => CancelablePromise<Response>;
