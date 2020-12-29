const knex = require('../../Model/index.Model')


exports.updateProduct = (req, res) => {
    console.log(req.body)

    let data = {
        product_ID: req.body.product_ID,
        category_ID: req.body.category_ID,
        image_link: req.body.image_link,
        product_name: req.body.product_name,
        Details: req.body.Details,
        price: req.body.price,
        Manufacturer: req.body.Manufacturer,
        Manufactured: req.body.Manufactured,
        Expiration: req.body.Expiration
    }




    knex('products')
        .where({ product_ID: data.product_ID })
        .update({
            category_ID: data.category_ID,
            image_link: data.image_link,
            product_name: data.product_name,
            Details: data.Details,
            price: data.price,
            Manufacturer: data.Manufacturer,
            Manufactured: data.Manufactured,
            Expiration: data.Expiration
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