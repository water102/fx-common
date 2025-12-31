import { CancelablePromise } from './cancelable-promise';

export function makeCancelablePromise<T>(
  promise: Promise<T>
): CancelablePromise<T> {
  let hasCanceled = false;

  const cancelablePromise: CancelablePromise<T> = {
    promise: new Promise<T>((resolve, reject) => {
      promise.then(
        (value: T) => {
          if (!hasCanceled) {
            resolve(value);
          }
        },
        (error: any) => {
          if (!hasCanceled) {
            reject(error);
          }
        }
      );
    }),
    cancel: () => {
      hasCanceled = true;
    }
  };

  return cancelablePromise;
}
