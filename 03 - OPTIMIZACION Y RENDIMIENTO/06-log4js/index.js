import log4js from "log4js";

log4js.configure({
  appenders: {
    fileAppender: { type: "file", filename: "./logs/ejemplo1.log" },
    consoleAppender: { type: "console" },
  },
  categories: {
    default: {
      appenders: ["fileAppender", "consoleAppender"],
      level: "debug",
    },
    dev: {
      appenders: ["consoleAppender"],
      level: "trace",
    },
    prod: {
      appenders: ["fileAppender"],
      level: "error",
    },
  },
});

const ENV = process.env.NODE_ENV || "prod";

export const logger = log4js.getLogger(ENV);

// logger.level = 'info';

logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");
