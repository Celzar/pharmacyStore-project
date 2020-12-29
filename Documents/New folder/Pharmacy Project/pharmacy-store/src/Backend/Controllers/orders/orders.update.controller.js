const knex = require('../../Model/index.Model')


exports.updateOrders = (req, res) => {
    console.log(req.body)

    knex('orders')
        .where({ order_ID: req.body.order_ID })
        .update({
            order_date_ID: req.body.order_date_ID,
            product_ID: req.body.product_ID,
            Amount: req.body.Amount,
            price: req.body.price
        })
        .then(result => {
            if (result >= 1) {
                res.json({
                    success: true,
                    message: 'update order success successfully!!'
                })
            } else {
                res.json({
                    sucess: false,
                    message: 'No result data to update!!'
                })
            }
        }).catch(err => console.log(err))
}