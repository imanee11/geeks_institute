const express = require('express');
const app = express()

app.use(express.json())

const todoRoutes = require('./routes/todos')

app.use('/todos', todoRoutes); 

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});