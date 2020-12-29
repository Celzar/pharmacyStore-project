const knex = require('../../Model/index.Model')

exports.productDelete = (req, res) => {
    console.log(req.body)
    
    knex('orders')
        .where('order_ID', req.body.order_ID)
        .del()
        .then(result => {
            console.log(result)
        }).catch(err => console.log(err))

}