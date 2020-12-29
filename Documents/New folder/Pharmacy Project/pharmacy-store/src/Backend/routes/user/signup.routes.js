

module.exports = (app) => {
    //@import addUser method from controllers
    let index = require('../../Controllers/user/signup.controller')
    app.post('/signup', index.addUser)
}

