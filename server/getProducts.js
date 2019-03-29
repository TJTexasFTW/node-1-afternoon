const products = require('../products.json');



// let getProducts = app.get("/api/products/", (request, response) => {
//     response.status(200).send(products) 
// });

// app.get('/api/products', getProducts);



const getProducts = (req, res) => {
    if (req.query.price) {
        const filteredPrice = products.filter(val => val.price >= parseInt(req.query.price));
        return res.status(200).send(filteredPrice);
    }  res.status(200).send(products);
}


module.exports = getProducts;