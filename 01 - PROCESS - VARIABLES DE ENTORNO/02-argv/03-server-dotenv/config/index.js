import dotenv from "dotenv";

const ENV = process.argv[2] || "development";

dotenv.config({ path: ENV === "qas" ? "./.env.qas" : "./.env.dev" });

export default {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  ENV
};
