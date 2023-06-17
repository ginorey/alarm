import { Logger } from "./logger";

const logger = new Logger();

logger.error();
logger.error({ statusCode: 404 });
logger.error({ message: 'Error, ahhh we are burning' });
logger.error({ statusCode: 500, message: 'Woopsie'})

