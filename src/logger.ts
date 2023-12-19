export enum LogLevel {
  none = 0,
  error,
  warn,
  info,
  debug,
  trace
}

export const defaultLogLevel = LogLevel.info;

export class FxLogger {
  private _logLevel = defaultLogLevel;

  public get logLevel() {
    return this._logLevel;
  }

  public set logLevel(newLogLevel: LogLevel) {
    this._logLevel = newLogLevel;
  }

  error(...arg: any[]): void {
    if (this._logLevel >= LogLevel.error)
      console.error(arg.length === 1 ? arg[0] : arg);
  }

  warn(...arg: any[]): void {
    if (this._logLevel >= LogLevel.warn)
      console.warn(arg.length === 1 ? arg[0] : arg);
  }

  info(...arg: any[]): void {
    if (this._logLevel >= LogLevel.info)
      console.info(arg.length === 1 ? arg[0] : arg);
  }

  debug(...arg: any[]): void {
    if (this._logLevel >= LogLevel.debug)
      console.log(arg.length === 1 ? arg[0] : arg);
  }

  trace(...arg: any[]): void {
    if (this._logLevel >= LogLevel.trace)
      console.log(arg.length === 1 ? arg[0] : arg);
  }
}

export const logger = new FxLogger();