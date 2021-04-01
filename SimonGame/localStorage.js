function getLocalStorage(playerName) {
    const scores = getScore(playerName);
    return scores;
}

function setLocalStorage(_playerName, _personalScore, _highScore) {
    localStorage.setItem(_playerName, _personalScore);
    localStorage.setItem('highScore', _highScore);
}

function getScore(newName){
    if(localStorage.getItem(newName)){
        return localStorage.getItem('highScore');
    } else {
        return 0;
    }   
}


export {getLocalStorage, setLocalStorage};
