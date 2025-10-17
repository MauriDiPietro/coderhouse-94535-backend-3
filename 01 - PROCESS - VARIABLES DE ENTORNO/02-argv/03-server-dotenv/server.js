import express from "express";
import { initMongoDB } from "./db-connection.js";
import config from "./config/index.js";

const app = express();

const PORT = config.PORT;

initMongoDB()
  .then(() => console.log("db conectada"))
  .catch((error) => console.log(error));

app.listen(PORT, () =>
  console.log(`Server ok puerto ${PORT}, Environment= ${config.ENV}`)
);
