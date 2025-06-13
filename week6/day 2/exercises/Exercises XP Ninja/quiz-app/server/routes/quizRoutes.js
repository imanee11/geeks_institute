const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/question/:id', quizController.getQuestion);

module.exports = router;
