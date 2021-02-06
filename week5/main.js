// Day 8 of 10 days of javascript- Variable Scope and Context 

// Understanding Scope 
let myName = "Ralph";
function stars(){
  let myName = "Ralph Junior"
    if (2 + 2 ==4) {
      let myName = "Ralph the 3rd";
      console.log("inside the if statement",myName);
    }
  console.log("inside our function", myName);
}

stars()
console.log("in the global scope", myName);

// IF we wanted to change the "global scope" myName 
// removed the word let inside the function or 
// if statement. 

// let uses block scope
// var uses function scope 

// Understanding Context 

let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar(){
      function car() {
        console.log(this);
      }
      car();
      console.log(this.firstName + " " + this.lastName + " is driving a car.")
    }
  }
  
  john.driveCar();
  
  // the this keyword points towards the object that is executing the current function 
  
  function breathe() {
    console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled.")
  }
  
  breathe.call(john);

//   Day 9: Misc. Must Know Info 

// Anonyous functions
document.addEventListener("click", function(){
    alert("thank you for clicking");
  });

// Arrow functions 

document.addEventListener("click", () =>{
    alert("thank you for clicking again for my arrow function");
  });

//   cleaner arrow function 
document.addEventListener("click", () => alert("this is for my cleaner arrow function"));

// Bringing it all together - arrow functions 
let myNumbers = [10, 500, 2000]
let doubledNumbers = myNumbers.map(x => x * 2)

console.log(doubledNumbers);

let ralph = {
    firstName: "John",
    lastName: "Doe",
    driveCar(){
      let newFunctionNotAMethod = () => console.log(this)
      newFunctionNotAMethod()
      console.log(this.firstName + " " + this.lastName + " is driving a car.")
    }
  }
  
  ralph.driveCar();