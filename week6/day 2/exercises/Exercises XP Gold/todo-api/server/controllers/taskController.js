const Task = require('../models/taskModel');

const getAll = async (req, res) => {
    const tasks = await Task.getAllTasks();
    res.json(tasks);
};

const getOne = async (req, res) => {
    const task = await Task.getTaskById(req.params.id);
    if (task) res.json(task);
    else res.status(404).json({ message: 'task not found' });
};

const create = async (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: 'title is required' });

    const [newTask] = await Task.createTask({ title });
    res.status(201).json(newTask);
};

const update = async (req, res) => {
    const task = await Task.updateTask(req.params.id, req.body);
    if (task.length > 0) res.json(task[0]);
    else res.status(404).json({ message: 'task not found' });
};

const remove = async (req, res) => {
    const deleted = await Task.deleteTask(req.params.id);
    if (deleted) res.json({ message: 'task deleted' });
    else res.status(404).json({ message: 'task not found' });
};

module.exports = { getAll, getOne, create, update, remove };
