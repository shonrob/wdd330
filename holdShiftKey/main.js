const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');


let lastChecked;


function handleCheck(e) {
//check if they havd the shift key down
// and check that they are checking it

let inBetween = false;
if(e.shiftKey && this.checked) {
//loop over every single checkbox
checkboxes.forEach(checkbox => {
    console.log(checkbox);
    //check a box and everyone inbetween the first and last checked grab them.
    if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
    }
    //everything in between the first and last checked will get checked.
    if(inBetween){
        checkbox.checked = true;
    }
});
}
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));