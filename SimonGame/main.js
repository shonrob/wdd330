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
const startButton = document.getElementById("start");
const yellow = document.getElementById("yellowCircle");
const purple = document.getElementById("purpleCircle");
const red = document.getElementById("redCircle");
const blue = document.getElementById("blueCircle");
const green = document.getElementById("greenCircle");
const roundElement = document.getElementById("round");
const roundModal = document.getElementById("rnd");
const modal = document.getElementById("modal");


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
       switch(_squence[counter]) {
            case 1: {
                currentColor = yellow;
                currentClass = "altYellow"
            }
                break;
            case 2: {
                currentColor = purple;
                currentClass = "altPurple"
            }
                break;
            case 3: {
                currentColor = red;
                currentClass = "altRed";
            }
                break;
            case 4: {
                currentColor = blue;
                currentClass = "altBlue";
            }
                break;
            case 5: {
                currentColor = green;
                currentClass = "altGreen";
            }
        }
        currentColor.classList.add(currentClass);
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
    console.log(btnNumber);
    if(!gameStarted) return;
    playerSquence.push(btnNumber);
    playerSquence.forEach((int, index) =>{
        if(int === sequence[index]){
            if(sequence.length === index +1){
                setTimeout(function(){
                    playerSquence.length = 0;
                    round++
                    roundElement.innerHTML = `<span>${round}</span>`;
                    sequence.push(randomGenerator());
                    playSequence(sequence, 0);
                    console.log("new round");
                    return;  
                }, 1000);
            }
            return;
        } else { 
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






