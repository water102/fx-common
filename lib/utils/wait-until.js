export function waitUntil(checkFunc, ms = 100) {
    return new Promise((resolve, _reject) => {
        const intervalHandle = setInterval(() => {
            if (!checkFunc())
                return;
            clearInterval(intervalHandle);
            resolve(undefined);
        }, ms);
    });
}
