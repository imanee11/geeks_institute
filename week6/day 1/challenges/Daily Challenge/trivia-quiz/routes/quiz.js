const express = require("express");
const router = express.Router();

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let current = 0;
let score = 0;

// show current question
router.get("/", (req, res) => {
    if (current >= triviaQuestions.length) {
        return res.redirect("/quiz/score");
    }
    res.json({ question: triviaQuestions[current].question });
});

// check answer and go to next
router.post("/", (req, res) => {
    const userAnswer = req.body.answer;

    if (!userAnswer) return res.json({ message: "pls enter an answer." });

    const correctAnswer = triviaQuestions[current].answer;

    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        res.json({ message: "correct!" });
    } else {
        res.json({ message: `wrong! The correct answer is "${correctAnswer}"` });
    }

    current++;
});

// show score
router.get("/score", (req, res) => {
    res.json({ score: `${score}/${triviaQuestions.length}` });

    // reset quiz
    current = 0;
    score = 0;
});

module.exports = router;
