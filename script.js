const questions = [
    { image: 'images/apple.jpg', answer: 'تفاحة' }, // Apple
    { image: 'images/car.jpg', answer: 'سيارة' },   // Car
    { image: 'images/fish.jpg', answer: 'سمك' },    // fish
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('image').src = question.image;
    document.getElementById('result').textContent = '';
    document.getElementById('user-input').value = '';
    document.getElementById('next-button').style.display = 'none';
}

function checkAnswer() {
    const userInput = document.getElementById('user-input').value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;
    
    if (userInput === correctAnswer) {
        score++;
        document.getElementById('result').textContent = 'Jawaban Benar!';
        document.getElementById('score').textContent = score;
    } else {
        document.getElementById('result').textContent = 'Jawaban Salah. Coba Lagi!';
    }
    document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('result').textContent = 'Game Selesai! Skor Akhir: ' + score;
        document.getElementById('next-button').style.display = 'none';
    }
}

// Initial load
loadQuestion();
