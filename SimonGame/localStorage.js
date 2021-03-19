function getLocalStorage() {
    const scores = {};
    scores.highScore = getHighScore();
    scores.personalScore = getPersonalScore(playerName);
    return scores;
}

function getHighScore(){
    if(localStorage.getItem('highScore')){
        return localStorage.getItem('highScore');
    } else {
        return 0;
    }   
}
function getPersonalScore(playerName){
    if(localStorage.getItem('personalScore')){
        return localStorage.getItem('personalScore');
    } else {
        return 0;
    }
}

export default getLocalStorage;