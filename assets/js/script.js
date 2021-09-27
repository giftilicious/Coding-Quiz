
let questions = [
    {
        quesTitle: 'What does "ul" stand for?',
        answers: ['Underline', 'User list', 'Unordered list', 'None of the above'],
        correctAnswer: 'Unordered list'
    },
    {
        quesTitle: 'Where is the best place to put a <script> tag in the HTML index file?',
        answers: ['Bottom of the body', 'Top of the body', 'Inside a </div> tag', "Nobody's business"],
        correctAnswer: 'Bottom of the body'
    },
    {
        quesTitle: 'What is a wireframe?',
        answers: ['Computer chip', 'Monitor', 'Website mockup', 'All of the above'],
        correctAnswer: 'Website mockup'
    },
    {
        quesTitle: 'Select the correct symbol for a modulus',
        answers: ['>=', '%', '*', '!=='],
        correctAnswer: '%'
    },
    {
        quesTitle: 'Which git command starts a new repository?',
        answers: ['git status', 'git add', 'pwd', 'git init'],
        correctAnswer: 'git init'
    },
    {
        quesTitle: 'Which scope can you declare a variable?',
        answers: ['Global', 'Local', 'Global or local', 'Micro'],
        correctAnswer: 'Global or local'
    },
];

let introEl = document.querySelector(".intro");
let startButton = document.querySelector("#start-button");
let timerEl = document.querySelector(".timer-clock");
let quizEl = document.querySelector(".quiz-questions");
let questionEl = document.querySelector("#question");
let scoreEl = document.querySelector(".final-score");
let userStats = document.querySelector(".scoreboard");
let submitInitials = document.querySelector('#submit-initials');
let playAgainBtn = document.querySelector('#restart-btn');
let currentOrderQues = 0;
let timer;
let timerCount = 61;

function startQuiz() {
    introEl.classList.add('hide');
    quizEl.classList.remove('hide');
    timerEl.classList.remove('hide');
    currentOrderQues = 0;
    timerCount = 61;
    startTimer();
    askQues();
}
startButton.addEventListener('click', startQuiz);

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount + " seconds left";
        if(timerCount <= 0) {
            timerEl.textContent = "0 seconds left";
          gameOver();
        }
    }, 1000);
}

function askQues() {
        let currentQuestion = questions[currentOrderQues];
        questionEl.textContent = currentQuestion.quesTitle;
        currentQuestion.answers.forEach(function(answer, i) {
            let answerBtn = document.getElementById('answer' + i);
            answerBtn.textContent = answer;
            answerBtn.addEventListener('click', selectAns);
        });
    }
    
function selectAns(event) {
    if (event.target.textContent === questions[currentOrderQues].correctAnswer) {
    } else {
        timerCount = timerCount - 10;
        timerEl.textContent = timerCount + " seconds left"; 
    }
    currentOrderQues++
    if (currentOrderQues === questions.length) {
        gameOver();
    } else {
         askQues();
    }
}

function gameOver() {
    clearInterval(timer);
    scoreEl.classList.remove('hide');
    quizEl.classList.add('hide');
}

function saveScore() {
    let userInitialsEl = document.getElementById('user-initials');
    let initials = userInitialsEl.value;
    let scoreBoard = initials.toUpperCase() + ": " + timerCount;
    localStorage.setItem("highScore", scoreBoard);
    scoreEl.classList.add('hide');
    userStats.classList.remove('hide');
    dispayScores();
}
submitInitials.addEventListener('click', saveScore);

function dispayScores() {
    timerEl.classList.add('hide');
    let highScore = localStorage.getItem('highScore');
    let scoreInfo = highScore.split(': ');
    let initialsBox = document.getElementById('user-initials-display');
    let scoreBox = document.getElementById('user-score');
    initialsBox.textContent = scoreInfo[0];
    scoreBox.textContent = scoreInfo[1];
}

function restartGame() {
    window.location.reload()
}

playAgainBtn.addEventListener('click', restartGame);
