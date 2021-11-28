const gameContainer = document.getElementById('game-container');
const startHeading = document.getElementById('start-heading');
const resultPage = document.getElementById('result');
const currentQuestion = document.getElementById('question');
const gameStart = document.getElementById('start-container');
const finalResult = document.getElementById('score-number');
const playAgainButton = document.getElementById('play-again');
let progress = document.getElementById('progress');
let progressContainer = document.getElementById('progress-container');
let currentOptions = document.getElementsByClassName('options');
let questionIndex = 0;
let currentLevel = [];
let correctAnswer;
let currentScore = 0;
let thisLevel = questionIndex + 1;



gameStart.addEventListener('click', runGame);
playAgainButton.addEventListener('click', playAgain);

/*Hide Start Page and Show First Question */
function runGame() {
    gameStart.classList.add('hide');
    gameContainer.classList.remove('hide');
    progressContainer.classList.remove('hide');
    displayQuestion();
}

/*Increase current score count by +1 */
function increaseScore() {
    currentScore++;
}

/*Checks if User Choice is Correct and Gives Alert Feedback */
function checkAnswer(userChoice) {
    if (userChoice == thisLevel.correct_answer) {
        increaseScore();
        Swal.fire({
            icon: 'success',
            title: 'Correct!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            nextQuestion();
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Wrong!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            nextQuestion();
        })
    }
}
/* Update HTML Text Content */
function storeOptions() {
    thisLevel = currentLevel[questionIndex];
    currentQuestion.innerText = thisLevel.question;

    for (let i = 0; i < 4; i++) {
        currentOptions[i].innerText = thisLevel.options[i];
    }
}

/* Jump to Next Question on Button Click */
function nextQuestion(event) {
    if (gameContent.length > questionIndex + 1) {
        questionIndex++;
        incrementProgress()
        storeOptions();
    } else {
        displayResults();
    }
}

/* Loop Questions + Options and Store in Empty Array */
function displayQuestion() {

    for (let i = 0; i < gameContent.length; i++) {
        currentLevel.push(gameContent[i]);

    }
    incrementProgress()
    storeOptions();
    
}

/*Add Event Listeners to Options to Store Users Chosen Answer */
for (option of currentOptions) {
    option.addEventListener('click', (event) => {
        let userChoice = event.target.innerText;
        checkAnswer(userChoice);
    })


}

/*Hides Game Content and Displays Result Page and Score */
function displayResults() {
    finalResult.innerText = currentScore;
    gameContainer.classList.add('hide');
    resultPage.classList.remove('hide');
    

}

/*Reset Score and Run Game Again */
function playAgain() {
    resultPage.classList.add('hide');
    questionIndex = 0;
    currentLevel = [];
    currentScore = 0;
    runGame();
}

function incrementProgress() {
    progress.innerText = questionIndex + 1;
}

/* Questions and Answers */

const gameContent = [{
    question: 'In the movie "The Iron Giant", this character is the protagonist.',
    options: ['Kent Mansley', 'Dean McCoppin', 'Annie Hughes', 'Hogarth Hughes'],
    correct_answer: 'Hogarth Hughes',
    incorrect_answers: ['Kent Mansley', 'Dean McCoppin', 'Annie Hughes']
}, {
    question: 'Who played Batman in the 1997 film "Batman and Robin"?',
    options: ['George Clooney', 'Michael Keaton', 'Val Kilmer', 'Christian Bale'],
    correct_answer: 'George Clooney',
    incorrect_answers: ['Michael Keaton', 'Val Kilmer', 'Christian Bale']
}, {
    question: 'What is the name of the dog that played Toto in the 1939 film "The Wizard of Oz"?',
    options: ['Terry', 'Tommy', 'Teddy', 'Toto'],
    correct_answer: 'Terry',
    incorrect_answers: ['Tommy', 'Teddy', 'Toto']
}, {
    question: 'In the 1994 movie "Speed", what is the minimum speed the bus must go to prevent to bomb from exploding?',
    options: ['60 mph', '50 mph', '40 mph', '70 mph'],
    correct_answer: '50 mph',
    incorrect_answers: ['60 mph', '40 mph', '70 mph']
}, {
    question: 'Who played Baron Victor Frankestein in the 1957 Hammer horror film "The Curse of Frankenstein"?',
    options: ['Boris Karloff', 'Vincent Price', 'Lon Chaney Jr.', 'Peter Cushing'],
    correct_answer: 'Peter Cushing',
    incorrect_answers: ['Boris Karloff', 'Vincent Price', 'Lon Chaney Jr.']
}, {
    question: 'In "The Lord of the Rings: The Fellowship of the Ring", which one of the following characters from the book was left out of the film?',
    options: ['Strider', 'Barliman Butterbur', 'Celeborn', 'Tom Bombadil'],
    correct_answer: 'Tom Bombadil',
    incorrect_answers: ['Strider', 'Barliman Butterbur', 'Celeborn']
}, {
    question: 'Which animated film did Steven Lisberger direct in 1980 before going on to direct Tron?',
    options: ['The Fox and the Hound', 'Animalympics', 'The Black Cauldron', 'The Great Mouse Detecive'],
    correct_answer: 'Animalympics',
    incorrect_answers: ['The Fox and the Hound', 'The Black Cauldron', 'The Great Mouse Detecive']
}, {
    question: 'In which movie does Robin Williams character have to disguise themselves into a woman?',
    options: ['Old Dogs', 'Jumanji', 'Mrs. Doubtfire', 'Awakenings'],
    correct_answer: 'Mrs. Doubtfire',
    incorrect_answers: ['Old Dogs', 'Jumanji', 'Awakenings']
}, {
    question: 'In "Finding Nemo", what was the name of Nemo\'s mom?',
    options: ['Coral', 'Sandy', 'Pearl', 'Shelly'],
    correct_answer: 'Coral',
    incorrect_answers: ['Sandy', 'Pearl', 'Shelly']
}, {
    question: 'Who did the score to the original "Blade Runner"?',
    options: ['Kitaro', 'Vangelis', 'Yanni', 'Enya'],
    correct_answer: 'Vangelis',
    incorrect_answers: ['Kitaro', 'Yanni', 'Enya']
}];