const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get('/todos', controller.getAll);
router.get('/todos/:id', controller.getOne);
router.post('/todos', controller.create);
router.put('/todos/:id', controller.update);
router.delete('/todos/:id', controller.remove);

module.exports = router;
