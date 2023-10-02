export declare function throttle<Args extends unknown[]>(fn: (...args: Args) => void, coolDown: number): (...args: Args) => void;
