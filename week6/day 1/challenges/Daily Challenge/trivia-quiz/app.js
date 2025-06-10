const express = require('express');
const app = express();

app.use(express.json());

const quizRouter = require('./routes/quiz');
app.use('/quiz', quizRouter);

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
