import getLocalStorage from './localStorage.js';

// ToDo: click on the button from landing page to play game
const btnToPlay = document.getElementById("start-game");
const landingPage = document.getElementById('landing-page');
const gamePage = document.getElementById('game-page');
const pname = document.getElementById("fname");
const hscore = document.getElementById("hi-score");
const startButton = document.getElementById("start");

btnToPlay.addEventListener('click', newGame);
startButton.addEventListener('click', startGame);

function newGame(){
    const playerName = pname.value;
    const highScore = getLocalStorage('highScore');
    const personalScore = getLocalStorage(playerName);
    setRemoveClassHide();
    hscore.innerHTML = `<span>${highScore}</span>`;

};

function setRemoveClassHide(){
    landingPage.classList.add('hidden');
    gamePage.classList.remove('hidden');
}

//ToDo: start game is clicked

function startGame () {
    const sequence = [];
    sequence.push(randomGenerator());
    console.log(sequence);

    //add hidden class and remove hidden class to start button
}
function randomGenerator(){
    let rand = Math.random() * (6 - 1) + 1;
    rand = Math.floor(rand);
    return rand; 
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



