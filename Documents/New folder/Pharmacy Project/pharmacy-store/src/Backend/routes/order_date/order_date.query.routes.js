module.exports = (app) => {
    const index = require('../../Controllers/order_date/order_date.query.controller')

    app.post('/order/date/query', index.query)

}