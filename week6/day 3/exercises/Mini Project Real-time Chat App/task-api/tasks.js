const express = require('express');
const fs = require('fs');
const path = require('path')


const router = express.Router()
const filePath = path.join(__dirname, 'tasks.json')

function readTasks() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

function writeTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// get all tasks
router.get('/', (req, res) => {
    try {
        const tasks = readTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'error reading tasks' });
    }
});

// get task by id 
router.get('/:id', (req, res) => {
    try {
        const tasks = readTasks();
        const task = tasks.find(t => t.id === parseInt(req.params.id));

        if (!task) {
            return res.status(404).json({ message: 'task not found' });
        }

        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'error reading tasks' });
    }
});

// create task
router.post('/', (req, res) => {
    try {
        const tasks = readTasks();
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'title and description are required' });
        }

        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            title,
            description,
            completed: false
        };

        tasks.push(newTask);
        writeTasks(tasks);

        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: 'error saving task' });
    }
});

// update
router.put('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const tasks = readTasks();
    const index = tasks.findIndex(task => task.id === taskId);

    if (index === -1) {
        return res.status(404).json({ error: 'task not found' });
    }

    const { title, description, completed } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'title and description are required' });
    }

    tasks[index] = {
        id: taskId,
        title,
        description,
        completed: completed || false
    };

    writeTasks(tasks);

    res.json(tasks[index]);
});




// delete 
router.delete('/:id', (req, res) => {
    try {
        const tasks = readTasks();
        const id = parseInt(req.params.id);
        const newTasks = tasks.filter(t => t.id !== id);

        if (tasks.length === newTasks.length) {
            return res.status(404).json({ message: 'task not found' });
        }

        writeTasks(newTasks);
        res.json({ message: 'task deleted' });
    } catch (err) {
        res.status(500).json({ message: 'error deleting task' });
    }
});

module.exports = router;