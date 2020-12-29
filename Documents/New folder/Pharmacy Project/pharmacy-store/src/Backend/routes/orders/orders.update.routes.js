module.exports = (app) => {
    const index = require('../../Controllers/orders/orders.update.controller')

    app.post('/updateorder', index.updateOrders)

}