function getLocalStorage(playerName) {
    const scores = getScore(playerName);
    return scores;
}

function getScore(newName){
    if(localStorage.getItem(newName)){
        return localStorage.getItem('highScore');
    } else {
        return 0;
    }   
}

export default getLocalStorage;