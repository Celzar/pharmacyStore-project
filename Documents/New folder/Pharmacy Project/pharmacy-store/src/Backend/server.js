
// const connection = require('./Model/index.Model')
const PORT = 8000

// @import Libraries
const express = require('./Config/express')


// Express initialization
const app = express()


app.listen(PORT, () => {
    console.log('server was running successfully on port:' + PORT)

})