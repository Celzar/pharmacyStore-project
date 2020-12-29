const knex = require('../../Model/index.Model')
const { nanoid } = require("nanoid")

exports.addProduct = (req, res) => {
    console.log(req.body)

    let data = {
        category_ID: req.body.category_ID,
        image_link: req.body.image_link,
        product_name: req.body.product_name,
        Details: req.body.Details,
        price: req.body.price,
        Manufacturer: req.body.Manufacturer,
        Manufactured: req.body.Manufactured,
        Expiration: req.body.Expiration
    }

    let randomID = nanoid(5) + new Date().getSeconds() + new Date().getMilliseconds() + nanoid(5) //string length === 15

    knex('products').where({
        'product_ID': randomID
    }).then((result) => {
        console.log(result)
        console.log(result.length)

        if (result.length === 0) {
            knex('products')
                .insert({
                    product_ID: randomID,
                    category_ID: data.category_ID,
                    image_link: data.image_link,
                    product_name: data.product_name,
                    Details: data.Details,
                    price: data.price,
                    Manufacturer: data.Manufacturer,
                    Manufactured: data.Manufactured,
                    Expiration: data.Expiration
                }).then(result => {
                 
                    if (result.length >= 1) {
                        return res.json({
                            success: true,
                            message: 'add new product successfully!!!'
                        })
                    }else {
                        res.status(404).json({
                            success: false,
                            message: 'cannot insert new product!! please check your data and try again!!'
                        })
                    }
                }).catch(err => console.log(err))
        } else {
            return res.state(404).json({ success: false, message: 'Maybe, your product id is already use Or something went wrong! Please try again!' })
        }

    }).catch(err => console.log(err))

}