const knex = require('../../Model/index.Model')

exports.addCategory = (req, res) => {
    console.log(req.body)

    knex('category').insert({
        category_name: req.body.category_name,
        Details: req.body.Details
    }).then(result => {
        //this result will return new column id which have just added

        if (result.length >= 1) {
            return res.json({
                success: true,
                message: 'new category added successfully!!'
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'cannot insert new product!! please check your data and try again!!'
            })
        }
    }).catch(err => console.log(err))


}