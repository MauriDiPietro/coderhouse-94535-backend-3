import { createLogger, transports, format } from "winston";

const { combine, timestamp, printf, colorize } = format;

const logConfig = {
  transports: [
    new transports.Console({ level: "silly" }),
    new transports.File({
      filename: "./logs/ejemplo-winston.log",
      level: "error",
    }),
  ],
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    colorize(),
    printf((info) => `[${info.level}] | ${info.timestamp} | ${info.message}`)
  ),
};

export const logger = createLogger(logConfig);

logger.silly("Entering cheese testing");
logger.debug("Got cheese.");
logger.verbose("Cheese is Comté.");
logger.info("Cheese is quite smelly.");
logger.http("Cheese is too ripe!");
logger.warn("Cheese was breeding ground for listeria.");
logger.error("Cheese was breeding ground for listeria.");
