const ENV = process.argv[2] || "development";

export default {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  ENV: process.env.ENV
};
