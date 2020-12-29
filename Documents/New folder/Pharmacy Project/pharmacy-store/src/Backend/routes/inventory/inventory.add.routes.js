module.exports = (app) => {
    const index = require('../../Controllers/inventory/inventory.add.controller')
    app.post('/addInventory', index.addInventory)
}