const db = require('../config/db');

async function getQuestionWithOptions(id) {
    const question = await db('questions').where({ id }).first();
    const options = await db('options').where({ question_id: id });
    return { ...question, options };
}

module.exports = {
    getQuestionWithOptions
};
