const knex = require('../../Model/index.Model')


exports.delete = async (req, res) => {
    console.log(req.body)

    knex('user').where('user_ID', req.body.user_ID).del()
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err))




}