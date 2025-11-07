import express from "express";
import cluster from "cluster";
import { cpus } from "os";

const app = express();

const PORT = 8080;

// console.log(cpus().length);

const numCPUS = cpus().length;

if (cluster.isPrimary) {
  console.log(`pid master ${process.pid}`);

  for (let i = 0; i < numCPUS; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code) => {
    console.log(`Worker ${worker.process.pid} caído con codigo ${code}`);
    cluster.fork();
  });
} else {
  app.get("/operacion-simple", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += i;
    }
    res.json({ sum });
  });

  app.get("/operacion-compleja", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 5000000000; i++) {
      sum += i;
    }
    res.json({ sum });
  });

  app.get("/dead", (req, res) => {
    res.json({ msg: "ok" });
    process.exit(1);
  });

  app.listen(PORT, () =>
    console.log(
      `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
    )
  );
}
