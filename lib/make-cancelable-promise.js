export function makeCancelablePromise(promise) {
    let hasCanceled = false;
    const cancelablePromise = {
        promise: new Promise((resolve, reject) => {
            promise.then((value) => {
                if (!hasCanceled) {
                    resolve(value);
                }
            }, (error) => {
                if (!hasCanceled) {
                    reject(error);
                }
            });
        }),
        cancel: () => {
            hasCanceled = true;
        },
    };
    return cancelablePromise;
}
