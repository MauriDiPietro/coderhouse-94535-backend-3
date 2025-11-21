// mocha + assert(node)

import mongoose from "mongoose";
import assert from "node:assert";
import { productDaoMongo } from "../daos/mongodb/product-dao.js";

describe("Tests unitarios Dao Productos", () => {
  before(async () => {
    await mongoose.connect("mongodb://localhost:27017/coderhouse");
    console.log("Base de datos conectada");
    await mongoose.connection.collections["products"].drop();
    console.log("Coleccion eliminada");
  });

  it("Debería retornar el listado de productos", async () => {
    const response = await productDaoMongo.getAll();
    assert.equal(Array.isArray(response), true);
    assert.equal(response.length, 0);
  });

  it("Debería registrar un producto", async () => {
    const body = {
      name: "producto de prueba",
      description: "descripcion de prueba",
      price: 5000,
      stock: 45,
    };

    const response = await productDaoMongo.create(body);

    assert.ok(response._id);
    assert.equal(response.name, body.name);
    assert.equal(response.description, body.description);
    assert.equal(response.price, body.price);
    assert.equal(response.stock, body.stock);

    const responseGetAll = await productDaoMongo.getAll();
    assert.equal(responseGetAll.length, 1);
  });
});
