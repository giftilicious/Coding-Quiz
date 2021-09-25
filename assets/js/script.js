

//Set up my questions and answers
let questions = [
    {
        quesTitle: 'Why is the sky blue?',
        answers: ['black', 'white', 'html', 'none of the above'],
        correctAnswer: 'none of the above'
    },
    {
        quesTitle: 'Why is the sky blue?',
        answers: ['black', 'white', 'html', 'none of the above'],
        correctAnswer: 'html'
    },
    {
        quesTitle: 'What does element mean?',
        answers: ['black', 'white', 'html', 'all of the above'],
        correctAnswer: 'white'
    },
    {
        quesTitle: 'Why is the sky blue?',
        answers: ['black', 'white', 'html', 'none of the above'],
        correctAnswer: 'none of the above'
    },
    {
        quesTitle: 'Why is the sky blue?',
        answers: ['black', 'white', 'html', 'none of the above'],
        correctAnswer: 'html'
    },
]


// Declare variables
// let introEl = document.querySelector(".intro");
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

let currentOrderQues = 0
let timer;
let timerCount = 60;
// let quesOptions = []

// I want to start the quiz 
//and show the questions, timer after I start
// Start the game  
function startQuiz() {
    console.log("Let's go!")
    introEl.classList.add('hide');
    quizEl.classList.remove('hide');
    timerEl.classList.remove('hide');
    currentOrderQues = 0;
    timerCount = 60;
    startTimer();
    askQues();
};



// I want to set a timer
// I want the timer deduct time for each question that's answered wrong
function startTimer() {
    timer = setInterval(function () {
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
        resetState();
        displayQues(randomOrderQues[currentOrderQues]);
        questionEl.textContent = questions[0].quesTitle;
        for(let i=0; i < questions.length; i++) {
            // This statement will run each time the loop is executed
            console.log(questions[i]);
          }
    };
    

    function displayQues(quesTitle) {
        questionEl.textContent = quesTitle.quesTitle;
        quesTitle.answers.forEach(answer => {
            let newButton = document.createElement('button');
            newButton.textContent = answer.selection;
            newButton.classList.add('button');
            if (selection.correct) {
                newButton.dataset.correct = answer.correct;
            }
            newButton.addEventListener('click', selectAns);
            answerEl.appendChild(newButton);
        });
    }

// I want "Correct" or "Wrong" to show on the bottom of screen when 
// user selects answer



// I want the quiz to end when timer hits 0 or user answers all questions
function gameOver() {
    clearInterval(timer)
}


// I want user to enter initials beside score and submit it


// I last final and initial to show up on screen after user submits
// and button for user to play again




/////////////////////////////////////////////////////////////////////




startButton.addEventListener('click', startQuiz);
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