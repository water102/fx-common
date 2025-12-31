import { logError } from './log-error';
import { logger } from './logger';

describe('logError', () => {
  beforeEach(() => {
    jest.spyOn(logger, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Logs error with default message', () => {
    const error = new Error('Test error');
    logError('error', error);
    
    expect(logger.error).toHaveBeenCalledWith('error', error);
  });

  test('Logs error with custom message', () => {
    const error = new Error('Test error');
    logError('Custom message', error);
    
    expect(logger.error).toHaveBeenCalledWith('Custom message', error);
  });

  test('Works with curried function', () => {
    const error = new Error('Test error');
    const logWithMessage = logError('Test');
    logWithMessage(error);
    
    expect(logger.error).toHaveBeenCalledWith('Test', error);
  });
});

