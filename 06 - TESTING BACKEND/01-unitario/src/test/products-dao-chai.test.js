// mocha + chai

import mongoose from "mongoose";
import { expect } from "chai";
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
    expect(response).to.be.an("array");
    expect(response.length).to.be.equal(0);
    expect(response).to.have.lengthOf(0);
  });

  it("Debería registrar un producto", async () => {
    const body = {
      name: "producto de prueba",
      description: "descripcion de prueba",
      price: 5000,
      stock: 45,
    };

    const response = await productDaoMongo.create(body);

    expect(response).to.be.an("object");
    expect(response).to.have.property("_id");
    expect(response).to.have.property("name").to.be.equal(body.name);
    expect(response)
      .to.have.property("description")
      .to.be.equal(body.description);
    expect(response).to.have.property("price").to.be.equal(body.price);
    expect(response).to.have.property("stock").to.be.equal(body.stock);

    const responseGetAll = await productDaoMongo.getAll();
    expect(responseGetAll).to.have.lengthOf(1);
  });
});
