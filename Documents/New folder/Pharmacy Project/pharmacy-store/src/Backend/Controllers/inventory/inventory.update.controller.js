const knex = require('../../Model/index.Model')


exports.update = (req, res) => {

    console.log(req.body)

    knex('inventory')
        .where({ inventory_ID: req.body.inventory_ID })
        .update({
            product_ID: req.body.product_ID,
            quantity: req.body.quantity,
            cost: req.body.cost
        })
        .then(result => {
            if (result >= 1) {
                res.json({
                    success: true,
                    message: 'update product success successfully!!'
                })
            } else {
                res.json({
                    sucess: false,
                    message: 'No result data to update!!'
                })
            }
        }).catch(err => console.log(err))


}