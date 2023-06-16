import { LogLevel } from './types';

export class Logger {
  public error(message: string): void {
    console.error(`[ERROR] $(message)`);
  }

  public success(message: string): void {
    console.log(`[SUCCESS] $(message)`);
  }
}