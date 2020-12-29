const knex = require('../../Model/index.Model')

exports.productDelete = (req, res) => {
    console.log(req.body)
    
    knex('products')
        .where('product_ID', req.body.product_ID)
        .del()
        .then(result => {
            console.log(result)
        }).catch(err => console.log(err))

}