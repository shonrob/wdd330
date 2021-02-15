// function properties and methods 
function square(x) {
    return x*x;
}
console.log(square.length);

// memoization 
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}
square(3);
console.log(square);
square(-11);
console.log(square);
console.log(square.cache);

// functions that define and rewrite themselves 
function party(){
    console.log('Wow this is amazing!');
    party = function(){
        console.log('Been there, got the T-Shirt');
    }
}
console.log(party());

// Recursive Functions 
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(0));
console.log(factorial(3));

// creating a promise 
const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});
// Dealing with a settled promise 
// const dice = {
//     sides: 6,
//         roll() {
//             return Math.floor(this.sides * Math.random()) + 1;
//         }
//     }
//     console.log('Before the roll');
//     const roll = new Promise( (resolve,reject) => {
//         const n = dice.roll();
//         if(n > 1){
//             setTimeout(()=>{resolve(n)},n*200);
//         } else {
//             setTimeout(()=>reject(n),n*200);
//         }
//     });
//     roll.then(result => console.log(`I rolled a ${result}`) )
//     .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
//     console.log('After the roll');

