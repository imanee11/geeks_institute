const express = require('express')
const app = express()

const PORT = 3000;

app.use(express.json());

const tasksRouter = require('./tasks')

app.use('/tasks', tasksRouter)


app.get('/', (req, res) => {
    res.send('task management API is running');
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
