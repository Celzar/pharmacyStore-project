const knex = require('../../Model/index.Model')

exports.productDelete = (req, res) => {
    console.log(req.body)
    
    knex('inventory')
        .where('inventory_ID', req.body.inventory_ID)
        .del()
        .then(result => {
            console.log(result)
        }).catch(err => console.log(err))

}