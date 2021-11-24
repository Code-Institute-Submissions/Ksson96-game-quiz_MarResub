
const gameStart =  document.getElementById('start')
gameStart.addEventListener('click', runGame);

function runGame() {
    let startHeading = document.getElementById('start-heading');
    let gameContainer = document.getElementById('game-container');
    gameStart.classList.add('hide');
    startHeading.classList.add('hide'); 
    gameContainer.classList.remove('hide');

}

function checkAnswer () {

}

function calculateScore() {

}

function displayQuestion() {

}

let gameContent = {};