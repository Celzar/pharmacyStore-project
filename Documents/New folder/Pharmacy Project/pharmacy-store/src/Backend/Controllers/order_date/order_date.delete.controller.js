const knex = require('../../Model/index.Model')

exports.productDelete = (req, res) => {
    console.log(req.body)

    knex('order_date')
        .where('order_date_ID', req.body.order_date_ID)
        .del()
        .then(result => {
            console.log(result)
        }).catch(err => console.log(err))

}