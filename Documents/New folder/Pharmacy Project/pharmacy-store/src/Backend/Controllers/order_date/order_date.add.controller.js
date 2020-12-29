const knex = require('../../Model/index.Model')

exports.order_date = (req, res) => {

    knex('order_date').insert({
        // inventory_ID is auto increment
        order_date: req.body.order_date,
    }).then(result => {
        //this result will return new column id which have just added
        if (result.length >= 1) {
            return res.json({
                success: true,
                message: 'new order added successfully!!',
                date: result
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'cannot insert new ordert!! please check your data and try again!!'
            })
        }
    }).catch(err => console.log(err))



}










