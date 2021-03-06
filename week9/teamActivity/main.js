
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    audio.currentTime = 0;
    if(!audio) return;
    audio.play();
    key.classList.add('playing');  
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
window.addEventListener('keydown', moveButton);

function moveButton(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(key.dataset.moveIncrement){
        key.dataset.moveIncrement = Number(key.dataset.moveIncrement) + 1;
    } else {
        key.dataset.moveIncrement = 1;
    }
    if(key.dataset.moveIncrement > 10) {
        delete key.dataset.moveIncrement;
    }
    const pixels = Number(key.dataset.moveIncrement) * 10;
    if(key.dataset.moveIncrement === undefined) {
        key.style.top = "0px";
    } else {
        key.style.top = `${pixels}px`;
    }
}