import { logger, FxLogger, LogLevel } from './logger';

describe('FxLogger', () => {
  let mockConsoleError: jest.SpyInstance;
  let mockConsoleWarn: jest.SpyInstance;
  let mockConsoleInfo: jest.SpyInstance;
  let mockConsoleLog: jest.SpyInstance;

  beforeEach(() => {
    mockConsoleError = jest.spyOn(console, 'error').mockImplementation();
    mockConsoleWarn = jest.spyOn(console, 'warn').mockImplementation();
    mockConsoleInfo = jest.spyOn(console, 'info').mockImplementation();
    mockConsoleLog = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    logger.logLevel = LogLevel.info;
  });

  describe('LogLevel.error', () => {
    test('Logs error messages', () => {
      logger.logLevel = LogLevel.error;
      logger.error('Error message');
      expect(mockConsoleError).toHaveBeenCalledWith('Error message');
    });

    test('Does not log warn/info/debug/trace at error level', () => {
      logger.logLevel = LogLevel.error;
      logger.warn('warn');
      logger.info('info');
      logger.debug('debug');
      logger.trace('trace');
      expect(mockConsoleWarn).not.toHaveBeenCalled();
      expect(mockConsoleInfo).not.toHaveBeenCalled();
      expect(mockConsoleLog).not.toHaveBeenCalled();
    });
  });

  describe('LogLevel.warn', () => {
    test('Logs warn and error messages', () => {
      logger.logLevel = LogLevel.warn;
      logger.warn('Warning message');
      logger.error('Error message');
      expect(mockConsoleWarn).toHaveBeenCalledWith('Warning message');
      expect(mockConsoleError).toHaveBeenCalledWith('Error message');
    });
  });

  describe('LogLevel.info', () => {
    test('Logs info, warn and error messages', () => {
      logger.logLevel = LogLevel.info;
      logger.info('Info message');
      logger.warn('Warning message');
      logger.error('Error message');
      expect(mockConsoleInfo).toHaveBeenCalledWith('Info message');
      expect(mockConsoleWarn).toHaveBeenCalledWith('Warning message');
      expect(mockConsoleError).toHaveBeenCalledWith('Error message');
    });
  });

  describe('LogLevel.debug', () => {
    test('Logs debug, info, warn and error messages', () => {
      logger.logLevel = LogLevel.debug;
      logger.debug('Debug message');
      expect(mockConsoleLog).toHaveBeenCalledWith('Debug message');
    });
  });

  describe('LogLevel.trace', () => {
    test('Logs all messages including trace', () => {
      logger.logLevel = LogLevel.trace;
      logger.trace('Trace message');
      expect(mockConsoleLog).toHaveBeenCalledWith('Trace message');
    });
  });

  describe('LogLevel.none', () => {
    test('Does not log any messages', () => {
      logger.logLevel = LogLevel.none;
      logger.error('error');
      logger.warn('warn');
      logger.info('info');
      logger.debug('debug');
      logger.trace('trace');
      expect(mockConsoleError).not.toHaveBeenCalled();
      expect(mockConsoleWarn).not.toHaveBeenCalled();
      expect(mockConsoleInfo).not.toHaveBeenCalled();
      expect(mockConsoleLog).not.toHaveBeenCalled();
    });
  });

  test('Handles multiple arguments', () => {
    logger.logLevel = LogLevel.info;
    logger.info('arg1', 'arg2', 'arg3');
    expect(mockConsoleInfo).toHaveBeenCalledWith(['arg1', 'arg2', 'arg3']);
  });

  test('Can create new logger instance', () => {
    const newLogger = new FxLogger();
    newLogger.logLevel = LogLevel.error;
    newLogger.error('Test');
    expect(mockConsoleError).toHaveBeenCalledWith('Test');
  });
});

