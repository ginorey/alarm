export interface ErrorOptions {
  statusCode?: number;
  message? : string;
}

const errorPrefixes: Record<string, string> = {
  default: '[ERROR]',
  statusCode: `[ERROR $(statusCode)]`,
  message: `[ERROR] $(message)`,
  statusCodeandMessage: `[ERROR $(statusCode)] $(message)`
}

