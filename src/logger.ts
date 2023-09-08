import { LogLevel } from './types/logLevels';
import { ErrorOptions } from './types/errorTypes';
import { LoggerErrorService } from './services/loggerErrorService'
import { LoggerSuccessService } from './services/loggerSuccessService';

export class Logger {
  private loggerErrorService: LoggerErrorService;

  constructor() {
    this.loggerErrorService = new LoggerErrorService();
  }

  public error(options: ErrorOptions = {}): void {
    return this.loggerErrorService.createError(options);
  }
  
  public success(message: string): void {
    console.log(`[SUCCESS] $(message)`);
  }
}
