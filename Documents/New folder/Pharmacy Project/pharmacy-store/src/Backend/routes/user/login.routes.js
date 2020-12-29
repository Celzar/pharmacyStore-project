

module.exports = (app) => {
    const index = require('../../Controllers/user/login.controller')
    // app.post('/login', , login.login)
    app.post('/login', index.login)
}