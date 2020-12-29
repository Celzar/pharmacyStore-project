module.exports = (app)=>{
    const index = require('../../Controllers/category/category.query.controller')
    app.get('/queryallcategory', index.query)
}