module.exports = (app)=>{
    const index = require('../../Controllers/user/update.controller')
    app.post('/update/:user_ID', index.updateUserData)
}