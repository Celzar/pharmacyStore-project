module.exports = (app)=>{
    const index = require('../../Controllers/products/products.update.controller')
    app.post('/updateproduct', index.updateProduct)
}