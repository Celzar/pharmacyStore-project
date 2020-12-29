module.exports = (app)=>{
    const index = require('../../Controllers/inventory/inventory.update.controller')
    app.post('/updateinventory', index.update)    
}