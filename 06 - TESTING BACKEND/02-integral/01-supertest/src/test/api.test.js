// jest + supertest

import app from "../server.js";
import request from "supertest";
import mongoose from "mongoose";
import { fakerES as faker } from "@faker-js/faker";
import { createProductMock } from "../utils/mock.js";

describe("tests api productos", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/products");
    console.log("✅ Base de datos conectada");
    await mongoose.connection.collections["products"].drop();
    console.log("⏺ Coleccion products eliminada");
  });

  test("[POST] /products", async () => {
 
  });

  test("[GET] /products", async () => {
 
  });

  test("[GET] /products/:id", async () => {
  
  });

  test('[PUT] /products/:id', async () => {
   
  })

  test('[DELETE] /products/:id', async () => {
    
  })
});
