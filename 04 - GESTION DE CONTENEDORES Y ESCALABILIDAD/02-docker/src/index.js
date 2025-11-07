import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(PORT, () =>
  console.log(
    `Servidor express escuchando en el puerto ${PORT}`
  )
);
