import express from "express";

const app = express();

const PORT = process.argv[2] || 8080;
const ENV = process.argv[3] || "development";

app.listen(PORT, () => console.log(`Server ok puerto ${PORT}, Environment= ${ENV}`));
