const express = require("express");
const app = express();
const getProducts = require('./getProducts')
// const products = require('../products.json');

app.get('/api/products', getProducts);















app.listen(3060, () => console.log("Listening on 3060"));