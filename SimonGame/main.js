import {getLocalStorage, setLocalStorage} from "./localStorage.js";



const sequence = [];
const playerSquence = [];
let gameStarted = false;
let round = 0;
let playerName;
let highScore;
let personalScore;

const btnToPlay = document.getElementById("start-game");
const landingPage = document.getElementById('landing-page');
const gamePage = document.getElementById('game-page');
const pname = document.getElementById("fname");
const hscore = document.getElementById("hi-score");
const pScore = document.getElementById('personal-score');
const startButton = document.getElementById("start");
const yellow = document.getElementById("yellowCircle");
const purple = document.getElementById("purpleCircle");
const red = document.getElementById("redCircle");
const blue = document.getElementById("blueCircle");
const green = document.getElementById("greenCircle");
const roundElement = document.getElementById("round");
const roundModal = document.getElementById("rnd");
const modal = document.getElementById("modal");

const sounds = {
    blueSound: new Audio('http://www.chiptape.com/chiptape/sounds/medium/mario%20ah.wav'), 
    redSound: new Audio('http://www.chiptape.com/chiptape/sounds/medium/mario%20coin.wav'), 
    yellowSound: new Audio("http://www.chiptape.com/chiptape/sounds/medium/mario%20jump.wav"), 
    greenSound: new Audio('http://www.chiptape.com/chiptape/sounds/medium/mario%20kick.wav'),
    purpleSound: new Audio('http://www.chiptape.com/chiptape/sounds/medium/mario%20stomp.wav'),
    loseSound: new Audio('http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3')
}



btnToPlay.addEventListener('click', newGame);
startButton.addEventListener('click', startGame);
yellow.addEventListener('click', function() {coreOperation(1)});
purple.addEventListener('click', function() {coreOperation(2)});
red.addEventListener('click', function() {coreOperation(3)});
blue.addEventListener('click', function() {coreOperation(4)});
green.addEventListener('click', function() {coreOperation(5)});
modal.addEventListener('click', resetGame);


function newGame(){
    playerName = pname.value;
    highScore = getLocalStorage('highScore');
    personalScore = getLocalStorage(playerName);
    setRemoveClassHide();
    hscore.innerHTML = `<span>${highScore}</span>`;
    pScore.innerHTML = `<span>${personalScore}</span>`;

};

function setRemoveClassHide(){
    landingPage.classList.add('hidden');
    gamePage.classList.remove('hidden');
}

//ToDo: start game is clicked

function startGame () {
    startButton.classList.add('hidden');
    roundElement.classList.remove('hidden');
    gameStarted = true;
    round = 1;
    roundElement.innerHTML = `<span>${round}</span>`;
    sequence.push(randomGenerator());
    playSequence(sequence, 0);

}
    // generate numbers between 1 -5 
function randomGenerator(){
    let rand = Math.random() * (6 - 1) + 1;
    rand = Math.floor(rand);
    return rand; 
}

function playSequence(_squence, index) {
    let currentColor;
    let currentClass;
    let counter = index;
    let playSound;
       switch(_squence[counter]) {
            case 1: {
                currentColor = yellow;
                currentClass = "altYellow";
                playSound = sounds.yellowSound;

            }
                break;
            case 2: {
                currentColor = purple;
                currentClass = "altPurple"
                playSound = sounds.purpleSound;
            }
                break;
            case 3: {
                currentColor = red;
                currentClass = "altRed";
                playSound = sounds.redSound;
            }
                break;
            case 4: {
                currentColor = blue;
                currentClass = "altBlue";
                playSound = sounds.blueSound;
            }
                break;
            case 5: {
                currentColor = green;
                currentClass = "altGreen";
                playSound = sounds.greenSound;
            }
        }
        currentColor.classList.add(currentClass);
        playSound.play();
        //play sound if time
        setTimeout(function(){
            currentColor.classList.remove(currentClass);
            setTimeout(()=> {
                if(counter < _squence.length - 1) {
                    counter++
                    playSequence(_squence, counter);
                } else {
                    return;
                }
            }, 250)
           
        }, 800)
};


    // sequence.push into array
function coreOperation(btnNumber) {
    if(btnNumber === 1){
        sounds.yellowSound.play();
    } else if (btnNumber ===2 ) {
        sounds.purpleSound.play();
    } else if (btnNumber ===3 ) {
        sounds.redSound.play();
    } else if (btnNumber ===4 ) {
        sounds.blueSound.play();
    } else if (btnNumber ===5 ) {
        sounds.greenSound.play();
    }
    if(!gameStarted) return;
    playerSquence.push(btnNumber);
    // for(playerSquence(int, index) = 0; playSequence(int,index)>= squence.length )
    playerSquence.forEach((int, index) =>{
        if(int === sequence[index]){
            if(sequence.length === index +1){
                setTimeout(function(){
                    playerSquence.length = 0;
                    round++
                    roundElement.innerHTML = `<span>${round}</span>`;
                    sequence.push(randomGenerator());
                    playSequence(sequence, 0);
                    return;  
                }, 1000);
            }
            return;
        } else { 
            sounds.loseSound.play();
            modal.classList.remove('hidden');
            if(round <= highScore) {
                roundModal.innerHTML = `You made it to Round ${round}`;
           } else {
            roundModal.innerHTML = `You made the New High Score of ${round}! Steller Job!!`;
           }

            
        }
    })
}

function resetGame(){
    modal.classList.add('hidden');
    gamePage.classList.add('hidden');
    landingPage.classList.remove('hidden');
    startButton.classList.remove('hidden');
    roundElement.classList.add('hidden');
    sequence.length = 0;
    if(round > highScore) {
        highScore = round;
    }
    if(round > personalScore) {
        personalScore = round;
    }
    setLocalStorage(playerName, personalScore, highScore);
}

/*


~hook up sounds
~ gamepage
    ~show high score
~disable button to start game unless they put in their name
*/


// ToDo: gameOver 
function gameOver() {
    //check to see if they got the high score
    //if personalScore > highScore
    //broadcast good game message your high score is..
    //else if highScore < personalScore 
    //great job message your highScore is this.
 
}






