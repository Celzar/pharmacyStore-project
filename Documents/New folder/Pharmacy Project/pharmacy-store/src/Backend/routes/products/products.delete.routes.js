module.exports = (app)=>{
    const index = require('../../Controllers/products/product.delete.controller')
    app.post('/deleteproduct', index.productDelete)
}