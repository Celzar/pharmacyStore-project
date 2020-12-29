const knex = require('../../Model/index.Model')


exports.update = (req, res) => {
  
    console.log(req.body)

    knex('category')
        .where({ category_ID: req.body.category_ID })
        .update({
            category_name: req.body.category_name,
            details: req.body.Details
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