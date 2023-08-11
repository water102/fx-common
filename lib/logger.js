export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["none"] = 0] = "none";
    LogLevel[LogLevel["error"] = 1] = "error";
    LogLevel[LogLevel["warn"] = 2] = "warn";
    LogLevel[LogLevel["info"] = 3] = "info";
    LogLevel[LogLevel["debug"] = 4] = "debug";
    LogLevel[LogLevel["trace"] = 5] = "trace";
})(LogLevel || (LogLevel = {}));
export class FxLogger {
    logLevel = LogLevel.info;
    error(...arg) {
        if (this.logLevel >= LogLevel.error)
            console.error(arg.length === 1 ?
                arg[0] :
                arg);
    }
    warn(...arg) {
        if (this.logLevel >= LogLevel.warn)
            console.warn(arg.length === 1 ?
                arg[0] :
                arg);
    }
    info(...arg) {
        if (this.logLevel >= LogLevel.info)
            console.info(arg.length === 1 ?
                arg[0] :
                arg);
    }
    debug(...arg) {
        if (this.logLevel >= LogLevel.debug)
            console.log(arg.length === 1 ?
                arg[0] :
                arg);
    }
    trace(...arg) {
        if (this.logLevel >= LogLevel.trace)
            console.log(arg.length === 1 ?
                arg[0] :
                arg);
    }
}
