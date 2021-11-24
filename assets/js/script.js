
const gameStart =  document.getElementById('start')
gameStart.addEventListener('click', runGame);
let currentQuestion = document.getElementById('question');

function runGame() {
    let startHeading = document.getElementById('start-heading');
    let gameContainer = document.getElementById('game-container');
    gameStart.classList.add('hide');
    startHeading.classList.add('hide'); 
    gameContainer.classList.remove('hide');
    displayQuestion();

}

function checkAnswer () {

}

function calculateScore() {

}

function displayQuestion() {
    currentQuestion.innerText = gameContent[1].question;

}

const gameContent =  [{
       question: "In the movie &ldquo;The Iron Giant,&rdquo; this character is the protagonist.",
       correct_answer: "Hogarth Hughes",
       incorrect_answers: ["Kent Mansley", "Dean McCoppin", "Annie Hughes"]
   }, {
       question: "Who played Batman in the 1997 film &quot;Batman and Robin&quot;?",
       correct_answer: "George Clooney",
       incorrect_answers: ["Michael Keaton", "Val Kilmer", "Christian Bale"]
   }, {
       question: "What is the name of the dog that played Toto in the 1939 film &quot;The Wizard of Oz&quot;?",
       correct_answer: "Terry",
       incorrect_answers: ["Tommy", "Teddy", "Toto"]
   }, {
       question: "In the 1994 movie &quot;Speed&quot;, what is the minimum speed the bus must go to prevent to bomb from exploding?",
       correct_answer: "50 mph",
       incorrect_answers: ["60 mph", "40 mph", "70 mph"]
   }, {
       question: "Who played Baron Victor Frankestein in the 1957 Hammer horror film &quot;The Curse of Frankenstein&quot;?",
       correct_answer: "Peter Cushing",
       incorrect_answers: ["Boris Karloff", "Vincent Price", "Lon Chaney Jr."]
   }, {
       question: "In The Lord of the Rings: The Fellowship of the Ring, which one of the following characters from the book was left out of the film?",
       correct_answer: "Tom Bombadil",
       incorrect_answers: ["Strider", "Barliman Butterbur", "Celeborn"]
   }, {
       question: "Which animated film did Steven Lisberger direct in 1980 before going on to direct Tron?",
       correct_answer: "Animalympics",
       incorrect_answers: ["The Fox and the Hound", "The Black Cauldron", "The Great Mouse Detecive"]
   }, {
       question: "In which movie does Robin Williams&#039; character have to disguise themselves into a woman?",
       correct_answer: "Mrs. Doubtfire",
       incorrect_answers: ["Old Dogs", "Jumanji", "Awakenings"]
   }, {
       question: "In Finding Nemo, what was the name of Nemo&#039;s mom?",
       correct_answer: "Coral",
       incorrect_answers: ["Sandy", "Pearl", "Shelly"]
   }, {
       question: "Who did the score to the original Blade Runner?",
       correct_answer: "Vangelis",
       incorrect_answers: ["Kitaro", "Yanni", "Enya"]
   }];


