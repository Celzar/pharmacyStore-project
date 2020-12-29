module.exports = (app) => {
    const index = require('../../Controllers/products/products.add.controller')
    app.post('/addproduct', index.addProduct)
}