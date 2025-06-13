let current = 1;
let score = 0;

function loadQuestion(id) {
    fetch(`/api/question/${id}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('question').innerText = data.question;
            const optionsList = document.getElementById('options');
            optionsList.innerHTML = '';
            data.options.forEach(opt => {
                const li = document.createElement('li');
                li.innerText = opt.option;
                li.onclick = () => checkAnswer(opt.option, data.correct_answer);
                optionsList.appendChild(li);
            });
        });
}

function checkAnswer(selected, correct) {
    const feedback = document.getElementById('feedback');
    if (selected === correct) {
        feedback.innerText = 'Correct!';
        score++;
    } else {
        feedback.innerText = `wrong! Correct answer: ${correct}`;
    }
}

function nextQuestion() {
    current++;
    if (current > 3) {
        alert(`quiz done! ur score: ${score}`);
        current = 1;
        score = 0;
    }
    document.getElementById('feedback').innerText = '';
    loadQuestion(current);
}


loadQuestion(current);
