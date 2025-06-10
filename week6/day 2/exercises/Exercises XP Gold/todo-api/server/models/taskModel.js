const db = require('../config/knexfile');

const getAllTasks = () => db('tasks').select('*');

const getTaskById = (id) => db('tasks').where({ id }).first();

const createTask = (task) => db('tasks').insert(task).returning('*');

const updateTask = (id, task) => db('tasks').where({ id }).update(task).returning('*');

const deleteTask = (id) => db('tasks').where({ id }).del();

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
