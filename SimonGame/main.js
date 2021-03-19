import getLocalStorage from './localStorage.js';

// ToDo: click on the button from landing page to play game
const btnToPlay = document.getElementById("start-game");
const landingPage = document.getElementById('landing-page');
const gamePage = document.getElementById('game-page');


btnToPlay.addEventListener('click', startGame);

// save the name to variable
const getName = document.getElementById("fname");
    
// check local storage for name
// Pull high score save in variable highScore
//if there is no high score set to 0.
// if exists then save score into a variable
 //else set high score to 0 (variable yourScore)
// 

//todo:run when get started button is clicked
function getHighScore(){

}
function getPersonalScore(){

}
function startGame(){
    const highScore = getLocalStorage().highScore;
    const personalScore = getLocalStorage().personalScore;
    console.log(highScore);
    console.log(personalScore);
    setRemoveClassHide();
    
};

function setRemoveClassHide(){
    landingPage.classList.add('hidden');
    gamePage.classList.remove('hidden');
}
//ToDo: start game is clicked
const sequence = [];

function randomGenerator(){
    // generate numbers between 1 -5 
    // sequence.push into array
}

function playSequence() {
    //forEach animate and sound cooresponding with the color
}

function playerSequence(){
    const pSquence = [];
    // when clicked add number to pSquence
    // check pSquence === squence
    // if true repeat else game over.
}

// ToDo: gameOver 
function gameOver() {
    //check to see if they got the high score
    //if personalScore > highScore
    //broadcast good game message your high score is..
    //else if highScore < personalScore 
    //great job message your highScore is this.
 
}
function checkPersonalScore() {

}

function checkHighScore() {

}

// ToDo: localStorage 
function setLocalStorage(){
    //check to see if name exists if so update else create new
    //check to see if highScore exists if so update else create new
}

function resetGame(){
    //go back to landing page.
}



