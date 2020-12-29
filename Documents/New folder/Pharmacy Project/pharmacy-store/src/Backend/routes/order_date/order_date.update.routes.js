module.exports = (app) => {
    const index = require('../../Controllers/order_date/order_date.add.controller')

    app.post('/updateorderdate', index.order_date)

}