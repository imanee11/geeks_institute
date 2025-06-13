const quizModel = require('../models/quizModel');

async function getQuestion(req, res) {
    const id = parseInt(req.params.id);
    const data = await quizModel.getQuestionWithOptions(id);
    res.json(data);
}

module.exports = {
    getQuestion
};
