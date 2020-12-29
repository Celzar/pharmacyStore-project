module.exports = (app) => {
    const index = require('../../Controllers/products/product.query.controller')
    app.get('/products/query', index.query)
}