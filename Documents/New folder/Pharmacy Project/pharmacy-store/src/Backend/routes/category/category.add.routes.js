module.exports = (app)=>{
    const index = require('../../Controllers/category/category.add.controller')
    app.post('/addCategory', index.addCategory)
}