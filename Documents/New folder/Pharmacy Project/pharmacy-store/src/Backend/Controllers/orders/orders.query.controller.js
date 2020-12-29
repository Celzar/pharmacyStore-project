const knex = require('../../Model/index.Model')

exports.query = (req, res) => {
    knex.select().table('orders')
        .then((result) => {
          
          
            // result.map((values, index) => {
            //     console.log(index , values.product_ID)
            // })

            if (result.length >= 1) {
                return res.json({
                    success: true,
                    message: 'query orders successfully!! with ' + result.length + ' rows',
                    order: result
                })
            }  else {
                return res.json({
                    success: true,
                    message: 'No result data!your result is ' + result.length + ' row',
                    order: result
                })
            }

        })
        .catch(err => console.log(err))

}