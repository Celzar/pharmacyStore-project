module.exports = (app) => {
    const index = require('../../Controllers/order_date/order_date.add.controller')

    app.post('/order/date/add', index.order_date)

}