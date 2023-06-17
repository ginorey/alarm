import { LoggerErrorService } from '../src/services/loggerErrorService';

describe('LoggerErrorService', () => {
  let loggerErrorService: LoggerErrorService;
  let exampleFunction: Function;

  beforeEach(() => {
    loggerErrorService = new LoggerErrorService();
    exampleFunction = exampleFunction();
  });

  describe('createError', () => {
    it('should output [ERROR] when no options are provided', () => {
      const result = loggerErrorService.createError();
      expect(result).toBe('[ERROR]'); 
    });
  
    it('should output [ERROR (statusCode) when statusCode is provided', () => {
      const result = loggerErrorService.createError({ statusCode: 404 });
      expect(result).toBe('[ERROR 404]');
    });
  
    it('should output [ERROR (statusCode)] errorFuncton when statusCode and errorFunction are provided', () => {
      const result = loggerErrorService.createError({ statusCode: 404, errorFunction: exampleFunction });
      expect(result).toBe('[ERROR 404] exampleFunction');
    });
  
    it('should output [ERROR (statusCode)] message, errorFunction when all options are provided', () => {
      const result = loggerErrorService.createError({ statusCode: 400, errorFunction: exampleFunction, message: 'Something went wrong' });
      expect(result).toBe('[ERROR 400] Something went wrong, exampleFunction');
    });
  });
});
