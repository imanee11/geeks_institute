let currentQuestion = 0;
let score = 0;
let questions = [];

async function loadQuestions() {
    const res = await fetch("/api/questions");
    questions = await res.json();
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    document.getElementById("feedback").textContent = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");

    if (selected === correct) {
        feedback.textContent = "correct!";
        score++;
    } else {
        feedback.textContent = `wrong! correct answer: ${correct}`;
    }

    document.querySelectorAll("#options button").forEach(btn => {
        btn.disabled = true;
    });
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById("quiz-box").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("score").textContent = `${score} / ${questions.length}`;
    }
});

loadQuestions();
