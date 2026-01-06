export declare enum LogLevel {
    none = 0,
    error = 1,
    warn = 2,
    info = 3,
    debug = 4,
    trace = 5
}
export declare const defaultLogLevel = LogLevel.info;
export declare class FxLogger {
    private _logLevel;
    get logLevel(): LogLevel;
    set logLevel(newLogLevel: LogLevel);
    error(...arg: any[]): void;
    warn(...arg: any[]): void;
    info(...arg: any[]): void;
    debug(...arg: any[]): void;
    trace(...arg: any[]): void;
}
export declare const logger: FxLogger;
