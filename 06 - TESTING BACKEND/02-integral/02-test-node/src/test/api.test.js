// node

import test, { before, describe } from "node:test";
import assert from "node:assert";
import mongoose from "mongoose";
import { fakerES as faker } from "@faker-js/faker";
import { createProductMock } from "../utils/mock.js";

const API_URL = "http://localhost:8080/products";

describe("tests api productos", () => {
  /*
  before(async () => {
    await mongoose.connection.dropCollection("products");
    console.log("⏺ Coleccion products eliminada");
  });
   */

  test("[POST] /products", async () => {
 
  });

  test("[GET] /products", async () => {
    
  });

  test("[GET] /products/:id", async () => {
   
  });

  test("[PUT] /products/:id", async () => {
  
  });

  test("[DELETE] /products/:id", async () => {
   
  });
});
