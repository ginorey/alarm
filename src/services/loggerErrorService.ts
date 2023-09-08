import { ErrorOptions } from "../types/errorTypes";

export class LoggerErrorService {
  public createError(options: ErrorOptions = {}): void {
    const { statusCode, message, errorFunction } = options;

    const errorPrefix = statusCode? `[ERROR ${statusCode}]` : '[ERROR]';
    const errorFunctionString = errorFunction? `${errorFunction.name}` : '';
    const errorMessage = message? `${message}`: '';

    const errorMessageOutput = `${errorPrefix}${errorMessage}${errorFunctionString}`;

    return console.error(errorMessageOutput);
  }
}