// jest + supertest

import app from "../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { fakerES as faker } from "@faker-js/faker";
import { createProductMock } from "../utils/mock.js";

describe("tests api productos", () => {
  let idProduct = null

  beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/products");
    console.log("✅ Base de datos conectada");
    await mongoose.connection.collections["products"].drop();
    console.log("⏺ Coleccion products eliminada");
  });

  test("[POST] /products", async () => {
    const body = createProductMock();
    const response = await request(app).post("/products").send(body);
    // console.log(response.body);
    const id = response.body.data._id;
    idProduct = id;
    const name = response.body.data.name;
    const price = response.body.data.price;
    const description = response.body.data.description;
    const stock = response.body.data.stock;

    expect(response.status).toBe(201);
    expect(id).toBeDefined();
    expect(name).toBe(body.name);
    expect(price).toBe(body.price);
    expect(description).toBe(body.description);
    expect(stock).toBe(body.stock);
    
  });

  test("[GET] /products", async () => {
    const response = await request(app).get("/products");
    const data = response.body.data;
    expect(response.status).toBe(200);
    // expect(Array.isArray(data)).toBe(true);
    expect(data).toBeInstanceOf(Array);
    // expect(data.length).toBe(1);
    expect(data).toHaveLength(1);
  });

  test("[GET] /products/:id", async () => {
    const response = await request(app).get(`/products/${idProduct}`);
    // console.log(response.body)
    const data = response.body.data;
    expect(response.status).toBe(200);
    // expect(data).toBeInstanceOf(Object);
    expect(data._id).toBe(idProduct);

    const idFaker = faker.database.mongodbObjectId();
    const responseFail = await request(app).get(`/products/${idFaker}`);
    expect(responseFail.status).toBe(404);
    expect(responseFail.body.data).toBeUndefined();
    expect(responseFail.body.message).toBe("Product not found");
  });

  test("[PUT] /products/:id", async () => {
    const body = createProductMock();
    const response = await request(app).put(`/products/${idProduct}`).send(body);
    const id = response.body.data._id;
    const name = response.body.data.name;
    const price = response.body.data.price;
    const description = response.body.data.description;
    const stock = response.body.data.stock;
    expect(response.status).toBe(200);
    expect(id).toBe(idProduct);
    expect(name).toBe(body.name);
    expect(price).toBe(body.price);
    expect(description).toBe(body.description);
    expect(stock).toBe(body.stock);
  });

  test("[DELETE] /products/:id", async () => {
    const response = await request(app).delete(`/products/${idProduct}`);
    expect(response.status).toBe(200);
    expect(response.body.data._id).toBe(idProduct);

    const idFaker = faker.database.mongodbObjectId();
    const responseFail = await request(app).delete(`/products/${idFaker}`);
    // console.log(responseFail.body)
    expect(responseFail.status).toBe(400);
    expect(responseFail.body.data).toBeUndefined();
    expect(responseFail.body.message).toBe("Error delete product");
  });
});
