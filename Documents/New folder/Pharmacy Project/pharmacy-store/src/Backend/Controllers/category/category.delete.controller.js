const knex = require('../../Model/index.Model')

exports.productDelete = (req, res) => {
    console.log(req.body)
    
    knex('category')
        .where('category_ID', req.body.category_ID)
        .del()
        .then(result => {
            console.log(result)
        }).catch(err => console.log(err))

}