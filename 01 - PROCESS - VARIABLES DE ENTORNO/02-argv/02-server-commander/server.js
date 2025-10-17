import express from "express";
import { program } from 'commander';

const app = express();

program
    .option('-p <port>', 'port server', 8080)
    .option('-e <env>', 'environment', 'development')

program.parse()

console.log(program.opts());

const PORT = program.opts().p;
const ENV = program.opts().e;

app.listen(PORT, () => console.log(`Server ok puerto ${PORT}, Environment= ${ENV}`));
