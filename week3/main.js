// Write a range function that takes two arguments, start and end, 
// and returns an array containing all the numbers from start up to 
// (and including) end.

// Next, write a sum function that takes an array of numbers and 
// returns the sum of these numbers.

function range(start, end) {
    let sequence = [];
    for(let i = start; i <= end; i++){
        // pushes the next number in the squence into the array.
       sequence.push(i); 
    }
    return sequence;
}
console.log(range(4, 13));

function sum(sequence){
    let addition = 0;
    sequence.forEach((i) => {
        addition += (i);
    })  
    return sum;
}

console.log(sum(range(1, 10)));

function rangeOverhall(start, stop, step = start < stop ? 1 : -1) {
    let array = [];
    if (step > 0 ) {
        for(let i = start; i <= stop; i += step) array.push(i);
    } else {
        for(let i = start; i >= stop; i += step) array.push(i);
    }
    return array;
}
console.log(rangeOverhall(4, 25, 2));

function plus(array){
    let adding = 0;
    array.forEach((i) => {
        adding += (i);
    })
    return adding;
}
console.log(plus(rangeOverhall(1,10, 3)));

// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order 
// in which its elements appear. For this exercise, write two functions, 
// reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array 
// as argument and produces a new array that has the same elements in the inverse 
// order. The second, reverseArrayInPlace, does what the reverse method does: it 
// modifies the array given as argument by reversing its elements. Neither may 
// use the standard reverse method.
function reverseArray(array) {
    let newArray = [];
    for(let i = newArray.length -1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(reverseArray("A","B","C","D","E"))

function reverseArrayInPlace(array) {
    for(let i = 0; i > Math.floor(array.length/2); i++) {
        let old = array [i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    
// Deep Comparison
// Write a function deepEqual that takes two values and returns true only if 
// they are the same value or are objects with the same properties, where the 
// values of the properties are equal when compared with a recursive call to 
// deepEqual.
function deepEqual(a,b){
    if (a === b) return true;
    if ( a == null || typeof a != "object" || 
        b == null || typeof b != "object") return false;
    let keysA = Object.keys(a), 
        keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;

    for(let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
 // my brain hurts.  I don't follow this one at all.

//  Write a JavaScript function to get the first element of an array. 
//  Passing a parameter 'n' will return the first 'n' elements of the 
//  array
function getFirst(){
    let array = ["A","B","C","D"]
    return array[0];
}
console.log(getFirst);
//first attempt didn't work- tried without assistence

var first = (array, n) => {
    if (array == null)
        return void 0;
    if (n == null)
        return array [0];
    if (n < 0)
        return [];
            return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));