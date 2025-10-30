import winston, { createLogger, transports } from "winston";

const logConfig = {
  transports: [ 
    new transports.Console({ level: "silly" }),
    new transports.File({ filename: "./logs/ejemplo-winston.log", level: "error" }),
   ]
}

const ENV = process.env.NODE_ENV || "prod";

export const logger = createLogger(logConfig);

// logger.level = 'info';

logger.silly("Entering cheese testing");
logger.debug("Got cheese.");
logger.verbose("Cheese is Comté.");
logger.info("Cheese is quite smelly.");
logger.http("Cheese is too ripe!");
logger.warn("Cheese was breeding ground for listeria.");
logger.error("Cheese was breeding ground for listeria.");
