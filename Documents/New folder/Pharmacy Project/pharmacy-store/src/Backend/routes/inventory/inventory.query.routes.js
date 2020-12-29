module.exports = (app)=>{
    const index = require('../../Controllers/inventory/inventory.query.controller')
    app.get('/inventory/query', index.query)
}