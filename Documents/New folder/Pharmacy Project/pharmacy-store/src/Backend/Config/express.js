const express = require('express')

module.exports = () => {
    const app = express()
    app.use(express.json());
    //@import libraries 
    const cors = require('cors')
    const morgan = require('morgan')
    const compression = require('compression')
    const helmet = require('helmet')
    const passport = require('passport')
    const path = require('path');


    // CORS initialization
    app.use(cors())

    // helmet initialization
    app.use(helmet())

    // Compress  all responses
    app.use(compression())

    // Morgan log request
    app.use(morgan('dev'))

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))


    // @ Connect To MYSQL using knex(ORM)
    const knex = require('../Config/knex/knex')
    knex.raw("SELECT VERSION()")
        .then((version) =>
            console.log('Connection has been established successfully. ', version[0][0])

        )
        .catch((err) => { console.log(err); throw err })
        .finally(() => {
            knex.destroy();
        });

    //@Serving static files to public folder
    app.use('/public', express.static(path.join(__dirname, '../public')))


    //@Passport moddleware
    app.use(passport.initialize())
    //@Passport config
    require('../middlewares/passportjs/passport')(passport)




    //@desc import routes

    //@User Routes
    //@signup api as /signup
    require('../routes/user/signup.routes')(app)
    //@login api as /login
    require('../routes/user/login.routes')(app)

    require('../routes/user/update.routes')(app)
    //@User Upload File Routes
    require('../routes/user/upload.routes')(app)

    //<--@Products Routes-->
    require('../routes/products/products.add.routes')(app)
    require('../routes/products/products.update.routes')(app)
    // require('../routes/products/products.delete.routes')(app)
    require('../routes/products/products.query.routes')(app)
    require('../routes/products/upload.products.image.routes')(app)

    //@Orders Routes
    require('../routes/orders/orders.add.routes')(app)
    require('../routes/orders/orders.query.routes')(app)
    require('../routes/orders/orders.update.routes')(app)

    //@Order date Routes
    require('../routes/order_date/order_date.add.routes')(app)
    require('../routes/order_date/order_date.query.routes')(app)
    require('../routes/order_date/order_date.update.routes')(app)

    //@Inventory Routes
    require('../routes/inventory/inventory.add.routes')(app)
    require('../routes/inventory/inventory.query.routes')(app)
    require('../routes/inventory/inventory.update.routes')(app)

    //@Category Routes
    require('../routes/category/category.add.routes')(app)
    require('../routes/category/category.query.routes')(app)
    require('../routes/category/category.update.routes')(app)




    return app;
}