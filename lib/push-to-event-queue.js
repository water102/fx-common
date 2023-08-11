export const pushToEventQueue = (func) => setTimeout(() => {
    func();
}, 0);
