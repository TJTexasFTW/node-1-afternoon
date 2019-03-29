const products = require('../products.json');



// let getProducts = app.get("/api/products/", (request, response) => {
//     response.status(200).send(products) 
// });

const getProducts = (req, res) => {
    res.status(200).send(products);
}


module.exports = getProducts;