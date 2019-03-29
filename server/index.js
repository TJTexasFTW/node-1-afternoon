const express = require("express");
const app = express();
const products = require('../products.json');

app.get("/api/products/", (request, response) => {
    response.status(200).send(products) 
});
















app.listen(3060, () => console.log("Listening on 3060"));