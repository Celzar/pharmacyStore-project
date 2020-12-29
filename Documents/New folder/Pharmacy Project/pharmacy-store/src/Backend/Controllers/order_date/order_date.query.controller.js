const knex = require('../../Model/index.Model')




// exports.query = (req, res) => {
//     knex.select().table('order_date')
//         .then((result) => {
//             // result.map((values, index) => {
//             //     console.log(index , values.product_ID)
//             // })

//             if (result.length >= 1) {
//                 return res.json({
//                     success: true,
//                     message: 'query orders successfully!! with ' + result.length + ' rows',
//                     order_date: result
//                 })
//             }  else {
//                 return res.json({
//                     success: true,
//                     message: 'No result data!your result is ' + result.length + ' row',
//                     order_date: result
//                 })
//             }

//         })
//         .catch(err => console.log(err))

// }

//@note query with condition
exports.query = (req, res) => {
    knex('order_date').where({
        order_date: req.body.order_date
    }).select()
        .then((result) => {
            // result.map((values, index) => {
            //     console.log(index , values.product_ID)
            // })
            // console.log(result[0])


            if (result.length >= 1) {
                return res.json({
                    success: true,
                    message: 'query orders successfully!! with ' + result.length + ' rows',
                    date: result
                })
            } else {
                return res.json({
                    success: true,
                    message: 'No result data!your result is ' + result.length + ' row',
                    order_date: result
                })
            }

        })
        .catch(err => console.log(err))

}
