


module.exports = (app) => {
    const index = require('../../Controllers/user/upload.Image.controller')
    app.post('/uploaduserimg', index.upload)
}