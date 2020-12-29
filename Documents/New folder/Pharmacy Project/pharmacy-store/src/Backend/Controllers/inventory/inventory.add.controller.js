const knex = require('../../Model/index.Model')

exports.addInventory = (req, res) => {
    console.log(req.body)
    let data = {
        product_ID: req.body.product_ID,
        quantity: req.body.quantity,
        cost: req.body.cost
    }

    knex('inventory').insert({
        // inventory_ID is auto increment
        product_ID: data.product_ID,
        quantity: data.quantity,
        cost: data.cost
    }).then(result => {
        //this result will return new column id which have just added
        if (result.length >= 1) {
            return res.json({
                success: true,
                message: 'new invenory added successfully!!'
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'cannot insert new product!! please check your data and try again!!'
            })
        }
    }).catch(err => console.log(err))


}