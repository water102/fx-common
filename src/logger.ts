export enum LogLevel {
  none = 0,
  error,
  warn,
  info,
  debug,
  trace
}

export class FxLogger {
  logLevel = LogLevel.info;

  error(...arg: any[]): void {
    if (this.logLevel >= LogLevel.error)
      console.error(arg.length === 1 ? arg[0] : arg);
  }

  warn(...arg: any[]): void {
    if (this.logLevel >= LogLevel.warn)
      console.warn(arg.length === 1 ? arg[0] : arg);
  }

  info(...arg: any[]): void {
    if (this.logLevel >= LogLevel.info)
      console.info(arg.length === 1 ? arg[0] : arg);
  }

  debug(...arg: any[]): void {
    if (this.logLevel >= LogLevel.debug)
      console.log(arg.length === 1 ? arg[0] : arg);
  }

  trace(...arg: any[]): void {
    if (this.logLevel >= LogLevel.trace)
      console.log(arg.length === 1 ? arg[0] : arg);
  }
}
