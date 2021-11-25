
const gameStart =  document.getElementById('start')
gameStart.addEventListener('click', runGame);
let currentQuestion = document.getElementById('question');
/*let currentOptions = document.getElementsByClassName('options');*/
let nextButton = document.getElementById('next');
nextButton.addEventListener('click', nextQuestion);
let questionIndex = 0;
let option1;
let option2;
let option3;
let option4;
let questions = [];
let correct;
let wrong = [];
let options = [];
let currentOptions;


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

function nextQuestion (event) {

    


        
        console.log(questionIndex);
        
        if (questions.length > questionIndex + 1) {
           questionIndex++;
        currentQuestion.innerText = questions[questionIndex];
        currentOptions = options[questionIndex];
        console.log(currentOptions);
        option1 = currentOptions[0];
        option2 = currentOptions[1];
        option3 = currentOptions[2];
        option4 = currentOptions[3];
        console.log(option1);
     
        
    } 
}


function displayQuestion() {
    
    for(let i = 0; i < gameContent.length; i++) {
        questions.push(gameContent[i].question);
        options.push(gameContent[i].options);
        
        
    }
    currentOptions = options[questionIndex];
    console.log(currentOptions);
    currentQuestion.innerText = gameContent[questionIndex].question;
    
    

    
   
   /* for (let option of currentOptions) {}*/
     /*   for (let i = 0; i < 4; i++) {*/
      /*  currentOption1 = gameContent[questionIndex].options[0];
        currentOption2 = gameContent[questionIndex].options[1];
        currentOption3 = gameContent[questionIndex].options[2];
        currentOption4 = gameContent[questionIndex].options[3];
        
        console.log(currentOption1); */
            console.log(currentQuestion);
            
            
          
            
            

      /*  } */

      
    }
    

    



 function displayResults() {

 }


/* Questions and Answers */

const gameContent =  [{
       question: "In the movie &ldquo;The Iron Giant,&rdquo; this character is the protagonist.",
       options: ["Kent Mansley", "Dean McCoppin", "Annie Hughes", "Hogarth Hughes"],
       correct_answer: "Hogarth Hughes",
       incorrect_answers: ["Kent Mansley", "Dean McCoppin", "Annie Hughes"]
   }, {
       question: "Who played Batman in the 1997 film &quot;Batman and Robin&quot;?",
       options: ["George Clooney", "Michael Keaton", "Val Kilmer", "Christian Bale"],
       correct_answer: "George Clooney",
       incorrect_answers: ["Michael Keaton", "Val Kilmer", "Christian Bale"]
   }, {
       question: "What is the name of the dog that played Toto in the 1939 film &quot;The Wizard of Oz&quot;?",
       options: ["Terry", "Tommy", "Teddy", "Toto"],
       correct_answer: "Terry",
       incorrect_answers: ["Tommy", "Teddy", "Toto"]
   }, {
       question: "In the 1994 movie &quot;Speed&quot;, what is the minimum speed the bus must go to prevent to bomb from exploding?",
       options: ["60 mph", "50 mph", "40 mph", "70 mph"],
       correct_answer: "50 mph",
       incorrect_answers: ["60 mph", "40 mph", "70 mph"]
   }, {
       question: "Who played Baron Victor Frankestein in the 1957 Hammer horror film &quot;The Curse of Frankenstein&quot;?",
       options: ["Boris Karloff", "Vincent Price", "Lon Chaney Jr.", "Peter Cushing"],
       correct_answer: "Peter Cushing",
       incorrect_answers: ["Boris Karloff", "Vincent Price", "Lon Chaney Jr."]
   }, {
       question: "In The Lord of the Rings: The Fellowship of the Ring, which one of the following characters from the book was left out of the film?",
       options: ["Strider", "Barliman Butterbur", "Celeborn", "Tom Bombadil"],
       correct_answer: "Tom Bombadil",
       incorrect_answers: ["Strider", "Barliman Butterbur", "Celeborn"]
   }, {
       question: "Which animated film did Steven Lisberger direct in 1980 before going on to direct Tron?",
       options: ["The Fox and the Hound", "Animalympics", "The Black Cauldron", "The Great Mouse Detecive"],
       correct_answer: "Animalympics",
       incorrect_answers: ["The Fox and the Hound", "The Black Cauldron", "The Great Mouse Detecive"]
   }, {
       question: "In which movie does Robin Williams&#039; character have to disguise themselves into a woman?",
       options: ["Old Dogs", "Jumanji", "Mrs. Doubtfire", "Awakenings"],
       correct_answer: "Mrs. Doubtfire",
       incorrect_answers: ["Old Dogs", "Jumanji", "Awakenings"]
   }, {
       question: "In Finding Nemo, what was the name of Nemo&#039;s mom?",
       options: ["Coral", "Sandy", "Pearl", "Shelly"],
       correct_answer: "Coral",
       incorrect_answers: ["Sandy", "Pearl", "Shelly"]
   }, {
       question: "Who did the score to the original Blade Runner?",
       options: ["Kitaro", "Vangelis", "Yanni", "Enya"],
       correct_answer: "Vangelis",
       incorrect_answers: ["Kitaro", "Yanni", "Enya"]
   }];


