const express = require('express')
const app = express()

// import router
const mainRoutes = require('./routes/index')

app.use('/', mainRoutes)

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});