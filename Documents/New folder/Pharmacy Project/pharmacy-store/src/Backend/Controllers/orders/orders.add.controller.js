const knex = require('../../Model/index.Model')

// convert js date to mysql
// function Date_toYMD() {
// var year, month, day;
// year = String(this.getFullYear());
// month = String(this.getMonth() + 1);
// if (month.length == 1) {
//     month = "0" + month;
// }
// day = String(this.getDate());
// if (day.length == 1) {
//     day = "0" + day;
// }
// return year + "-" + month + "-" + day;
// }


exports.orders = (req, res) => {

    knex('orders').insert({
        // inventory_ID is auto increment
        order_date_ID: req.body.order_date_ID,
        product_ID: req.body.product_ID,
        Amount: req.body.Amount,
        price: req.body.price,

    }).then(result => {
        //this result will return new column id which have just added
        if (result.length >= 1) {
            return res.json({
                success: true,
                message: 'new order added successfully!!'
            })
        } else {
            res.status(404).json({
                success: false,
                message: 'cannot insert new ordert!! please check your data and try again!!'
            })
        }
    }).catch(err => console.log(err))


}





















//     console.log(req.body)

//     let orders = {
//         product_ID: req.body.product_ID,
//         Amount: req.body.Amount,
//         price: req.body.price
//     }

//     dateNow = req.body.dateNow

//     //check order_date if already exists
//     knex('order_date').where('order_date', dateNow)
//         .then(result => {
//             //if the date already exists just insert new order into order table
//             if (result.length >= 1) {
//                 knex('orders').insert({
//                     // order_ID: note: we already set it as auto increment
//                     order_date_ID: result[0].order_date_ID,
//                     product_ID: orders.product_ID,
//                     Amount: orders.Amount,
//                     price: orders.price
//                 })

//                     .then(result => {
//                         if (result.length >= 1) {
//                             res.json({
//                                 success: true,
//                                 message: 'Add new order successfully!!'
//                             })
//                         } else {
//                             res.status(404).json({
//                                 success: false,
//                                 message: 'cannot insert new order!! please check your data and try again!!'
//                             })
//                         }
//                     }).catch(err => console.log(err))
//             }

//             //if the date not exists  insert new order into order table and date now into  order_date 
//             else {
//                 knex('order_date').insert({
//                     // order_date_ID: note: we already set it as auto increment
//                     order_date: dateNow
//                 }).then(result => {

//                     // console.log(result)
//                     // console.log(result[0].order_date_ID)
//                     if (result.length >= 1) {
//                         knex('orders').insert({
//                             // order_ID: note: we already set it as auto increment
//                             order_date_ID: result,
//                             product_ID: orders.product_ID,
//                             Amount: orders.Amount,
//                             price: orders.price
//                         })
//                             .then(result => {
//                                 if (result.length >= 1) {
//                                     res.json({
//                                         success: true,
//                                         message: 'Add new order successfully!!'
//                                     })
//                                 } else {
//                                     res.status(404).json({
//                                         success: false,
//                                         message: 'Something went wrong!!'
//                                     })
//                                 }
//                             }).catch(err => console.log(err))
//                     }
//                 }).catch(err => console.log(err))
//             }


//         })
//         .catch(err => console(err))

// }