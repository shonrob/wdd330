// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

for (side = "#"; side.length < 8; side += "#" )
    // side.length = each # line looping 7 times and each time adding another # to the line.
    console.log(side);

// Write a program that uses console.log to print all the numbers from 1 to 100, 
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" 
// for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for 
// numbers divisible by only one of those).

// starting at 1 count upto 100 
for (let n = 1; n < 101; n++) {
    // give number an empty string to be filled with either Fizz or Buzz or Fizz Buzz 
    let number = " ";
    // if number is divisible by 3 give it the word Fizz 
    if (n % 3 == 0) number += "Fizz";
    // if the number is divisible by a 5 give it the word Buzz 
    if (n % 5 == 0) number += "Buzz";
    // if the number is divisible by 3 and 5 give it the words Fizz Buzz 
    console.log(number || n);
}

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. At each position of the grid there is 
// either a space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 
// and change the program so that it works for any size, outputting a grid of the given width and height.

// how big the board is
let size = 8;
// allows the gameBoard to be structured correctly
let gameBoard = "";

// y = one space & x = the other space
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        // adding the spaces and modulus gives them the every other spot.
        if ((x + y) % 2 == 0) {
            gameBoard += " ";
        } 
        else {
            gameBoard += "#";
        }
    }
    // starts a new line of the gameBoard
    gameBoard += "\n";
}

console.log(gameBoard);

// Chapter 2 Quiz Ninja Project 

                                                // const question = "What is Superman's real name";
                                                // const answer = prompt(question);
                                                // alert(`You answered ${answer}`);

// Functions 

// Minimum
// The previous chapter introduced the standard function 
// Math.min that returns its smallest argument. We can build 
// something like that now. Write a function min that takes two 
// arguments and returns their minimum.

// start a function that looks for the min number between the two options. 
function min(a , b) {
    if (a < b) return a;
        else return b;
}
console.log(min(0, -10));

// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number 
// is even or odd by using % 2 to see whether it’s divisible by two. Here’s another 
// way to define whether a positive whole number is even or odd:
// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. 
// The function should accept a single parameter (a positive, whole number) 
// and return a Boolean.

// start a function to look for even numbers 
function isEven(n) {
    // if the number is 0 it is true. 
    if (n == 0) return true;
    // if the number is 1 it's an odd so it is false. 
    else if (n == 1) return false;
    // if the number is less than 0 its a negative which makes it false
    else if (n < 0) return isEven(-n);
    else return isEven(n-2);
}
console.log(isEven(75));
console.log(isEven(20));


// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. 
// The returned value will be a string containing only one character (for example, "b"). 
// The first character has position 0, which causes the last one to be found at position 
// string.length - 1. In other words, a two-character string has length 2, and its characters 
// have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number 
// that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second 
// argument that indicates the character that is to be counted (rather than counting only 
// uppercase “B” characters). Rewrite countBs to make use of this new function.


function countChar(string, chars) {
    // start the counting at 0 
    let count = 0;
    // start the count at 0 and for however long the string is count up 
    for (let c = 0; c < string.length; c++) {
        // if in that string has letters that are the characters...
        if (string[c] == chars) {
            // count each character as it adds up 
            count +=1;
        }
    } 
    return count;
}

function countBs(string) {
    return countChar(string, "B");

}
console.log(countBs("BBBBBBBBaaaabbbBBBaaB"));
console.log(countChar("a;sjgoia;giajg", "g"));

// The sum of a range
// Write a range function that takes two arguments, start and end, and 
// returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the 
// sum of these numbers. Run the example program and see whether it does 
// indeed return 55.

// function that has two arguments 
function range(start, end) {
    // empty array 
    let numbers = [];
    // begin at the start of the array and go through all the array and increment by one till you reach last number 
    for(let i=start; i<=end; i++){
        // push adds each number into the array to get through the entire array. 
        numbers.push(i);
    }
    return numbers;
}
console.log(range(1, 3));

function sum(numbers) {
    let add = 0;
    // get the entire array 
    numbers.forEach((i)=> {
        // add to each increment of numbers of the array 
        add += (i);
    })
    return sum;
}
console.log(sum(range(1, 3)));

