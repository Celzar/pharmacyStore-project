module.exports = (app) => {
    const index = require('../../Controllers/orders/orders.add.controller')

    app.post('/order/add', index.orders)

}