//Get all panels with a class of panel
const panels = document.querySelectorAll('.panel');

//function to toggleOpen the panel larger. 
function toggleOpen() {
    //anything that has a class of 'open' will be toggled to flex a space of 5
    this.classList.toggle('open');
}

//function to toggleActive to bring words down.
function toggleActive(e) {
    //if in the propertyname it includes the word flex activate for the function to apply.
    if(e.propertyName.includes('flex')) {
        //when the class open-active is present drop words down.
        this.classList.toggle('open-active');
    }
}

//listening for a click even to open the panel wider.
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
//listening for a click and when the transition has ended it will add the class open-active dropping the words down.
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));