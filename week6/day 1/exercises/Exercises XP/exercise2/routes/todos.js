const express = require('express');
const router = express.Router();

let todos = [];
let nextId = 1;

router.get('/', (req, res) => {
    res.json(todos);
});

// add new todo
router.post('/', (req, res) => {
    const { title } = req.body;
    const newTodo = { id: nextId++, title };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// update
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title } = req.body;
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.title = title;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'todo not found' });
    }
});


// delete
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({ message: 'todo deleted' });
});

module.exports = router;
