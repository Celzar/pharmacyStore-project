const knex = require('../../Model/index.Model')


exports.updateProduct = (req, res) => {
    console.log(req.body)

    knex('order_date')
        .where({ order_date: req.body.order_date_ID})
        .update({
           order_date: req.body.order_date,
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