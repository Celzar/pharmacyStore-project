module.exports = (app)=>{
    const index = require('../../Controllers/orders/orders.query.controller')
    app.get('/queryallorders', index.query)
}