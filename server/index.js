const express = require("express");
const app = express();
const getProducts = require('./getProducts')
const getProduct = require('./getProduct');

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);




app.listen(3060, () => console.log("Listening on 3060"));