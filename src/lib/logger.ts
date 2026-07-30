import pino from 'pino';

process.env.NODE_ENV !== 'production';

const isDevelopment = process.env.NODE_ENV !== 'production';

const logger = pino({
	level: process.env.LOG_LEVEL,
	transport: isDevelopment ? { target: 'pino-pretty' } : undefined
});

export default logger;
