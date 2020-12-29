

module.exports = (app)=>{
    const index = require('../../Controllers/products/upload.product.image.controller')
    app.post('/uploadproductimg', index.upload)    
}