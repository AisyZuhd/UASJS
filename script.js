let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

async function loadQuestions() {
    const res = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
    const data = await res.json();
    questions = data.results;
    showQuestion();
}

function decodeHtml(text) {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
}

function showQuestion() {
    const q = questions[currentQuestion];
    const allAnswers = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);

    document.getElementById('question').textContent = decodeHtml(q.question);

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    selectedAnswer = null;

    allAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = decodeHtml(answer);
        button.classList.add('answer-btn');
        button.onclick = () => {
            const correctAnswer = q.correct_answer;

            // Tandai semua tombol
            document.querySelectorAll('.answer-btn').forEach(btn => {
                btn.disabled = true;

                if (btn.textContent === decodeHtml(correctAnswer)) {
                    btn.classList.add('benar');
                } else if (btn === button && button.textContent !== decodeHtml(correctAnswer)) {
                    btn.classList.add('salah');
                }
            });

            if (answer === correctAnswer) score++;

            setTimeout(() => {
                currentQuestion++;
                currentQuestion < questions.length ? showQuestion() : showScore();
            }, 1000); // jeda 1 detik biar user lihat efeknya
        };
        answersDiv.appendChild(button);
    });

    document.getElementById('next-button').style.display = 'block';
}

// function nextQuestion() {
//     const correct = questions[currentQuestion].correct_answer;
//     if (selectedAnswer === correct) score++;

//     currentQuestion++;
//     if (currentQuestion < questions.length) {
//         showQuestion();
//     } else {
//         showScore();
//     }
// }

function showScore() {
    document.getElementById('quiz-container').innerHTML = `
    <h2>Skor Anda: ${score} / ${questions.length}</h2>
    <button onclick="kirimSkor()">Simpan Skor</button>
  `;
}

function kirimSkor() {
    fetch('http://localhost:3000/api/skor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skor: score })
    })
        .then(res => res.json())
        .then(() => window.location.href = 'riwayat.html')
        .catch(() => alert('Gagal menyimpan skor.'));
}

function showQuiz() {
    document.getElementById("quiz-container").style.display = "block";
    // Optionally hide the welcome section if needed:
    // document.querySelector('.hero').style.display = 'none';
}


loadQuestions();