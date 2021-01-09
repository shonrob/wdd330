//  Write a JavaScript function that reverse a number.
function reverseNumber(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverseNumber(12345));
//  I don't understand why I can't make n = 12345?  Why does it have to n = n + ""?

//button

function press() {
    document.getElementById("button").innerHTML = "Its a Great Day";
}
