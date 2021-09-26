
//Set up my questions and answers - populate with actual questions
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


// Declare variables
let introEl = document.querySelector(".intro");
let startButton = document.querySelector("#start-button");
let nextButton = document.querySelector("#next-button");
let answerResult = document.querySelector('answerResult-text');
let timerEl = document.querySelector(".timer-clock");
let quizEl = document.querySelector(".quiz-questions");
let questionEl = document.querySelector("#question");
let answerEl = document.querySelector("#answerBtns");
let scoreEl = document.querySelector(".final-score");
let userStats = document.querySelector(".scoreboard");
let submitInitials = document.querySelector('#submit-initials');
let playAgainBtn = document.querySelector('#restart-btn');

let currentOrderQues = 0;
let timer;
let timerCount = 61;
// let quesOptions = []

// I want to start the quiz and show the questions, timer after I start
// Start the game  
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

// I want to set a timer
// I want the timer deduct time for each question that's answered wrong
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

// Display current question
function askQues() {
        let currentQuestion = questions[currentOrderQues];
        questionEl.textContent = currentQuestion.quesTitle;
        currentQuestion.answers.forEach(function(answer, i) {
            let answerBtn = document.getElementById('answer' + i);
            answerBtn.textContent = answer;
            answerBtn.addEventListener('click', selectAns);
        });
    }
    
// Check if answer is correct
function selectAns(event) {
    if (event.target.textContent === questions[currentOrderQues].correctAnswer){
        // rightAnswer()
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

// I want "Correct" or "Wrong" to show on the bottom of screen when 
// user selects answer




// I want the quiz to end when timer hits 0 or user answers all questions
function gameOver() {
    clearInterval(timer);
    scoreEl.classList.remove('hide');
    quizEl.classList.add('hide');
}

// I want user to enter initials beside score and submit it
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

// I want final score and initial to show up on screen after user submits
// and button for user to play again
function dispayScores() {
    timerEl.classList.add('hide');
    let highScore = localStorage.getItem('highScore')
    console.log(highScore);
    highScore.textContent;
    let scoreInfo = highScore.split(': '); // ["GG", "12"]
    console.log(scoreInfo)
    let initialsBox = document.getElementById('user-initials-display');
    let scoreBox = document.getElementById('user-score');
    initialsBox.textContent = scoreInfo[0];
    scoreBox.textContent = scoreInfo[1];
}
playAgainBtn.addEventListener('click', startQuiz);

/////////////////////////////////////////////////////////////////////






// nextButton.addEventListener('click', () => {
//     currentOrderQues++
//     askQues();
// });

// //Function to ask the questions randomly
// 

// function resetState() {
//     nextButton.classList.add('hide');
//     while (answerEl.firstChild) {
//         answerEl.removeChild(answerEl.firstChild);
//     }
// }

// function selectAns(answers) {
//     answerEl.appendChild('button') = answers.selection
//     // let selectedOption = event.target;
//     // let correct = selectedOption.dataset.correct;
//     // Array.from(answerEl.children).forEach(newButton => {
//     //   if (correct) {
//     //     console.log('right');
//     //     answerResult.classList.remove('hide');
//     //     answerResult.textContent = "Correct! 👍🏽"    
//     //   } else {
//     //     console.log('wrong');
//     //     answerResult.classList.remove('hide');
//     //     answerResult.textContent = "Wrong ❌"
//     //   }  
//     // })
// }


// let questions = [ 
//     {
//         quesTitle: 'What does element mean?',
//         answers: [
//             {selection: "paper", result: false},
//             {selection: "part of html", result: true},
//             {selection: "grass", result: false},
//             {selection: "bug", result: false},
//         ]
//     },
//     {
//         quesTitle: 'Where does html live?',
//         answers: [
//             {selection: "paper", result: false},
//             {selection: "whole html", result: false},
//             {selection: "grass", result: false},
//             {selection: "bug", result: true},
//         ]
//     },
//     {
//         quesTitle: 'Why does java boil?',
//         answers: [
//             {selection: "queen", result: true},
//             {selection: "part of xray", result: false},
//             {selection: "dirt", result: false},
//             {selection: "bug", result: false},
//         ]
//     },
//     {
//         quesTitle: 'What are you?',
//         answers: [
//             {selection: "paper", result: false},
//             {selection: "part of html", result: true},
//             {selection: "gimme more", result: false},
//             {selection: "bug", result: false},
//         ]
//     },
//     {
//         quesTitle: 'What am I supposed to cook?',
//         answers: [
//             {selection: "paper", result: false},
//             {selection: "toad", result: true},
//             {selection: "grass", result: false},
//             {selection: "heal the world", result: false},
//         ]
//     },
//     {
//         quesTitle: 'When does this end?',
//         answers: [
//             {selection: "paper", result: false},
//             {selection: "never will it end", result: true},
//             {selection: "grass", result: false},
//             {selection: "bug", result: false},
//         ]
//     }

// ]