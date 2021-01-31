
// Day 2 of JavaScript - LearnWebCode 
function greet (name, favColor) {
    alert("hello, my name is " + name + "and my favorite color is " + favColor + ".");
}
 alert("Jane", "orange");

 function tripleMe(x) {
    return 3 * x
 }

 let myFavNumber = tripleMe(10);

 alert (myFavNumber);

//  Objects: Day 2 of JavaScript - LearnWebCode 
let cat = {
    name: "fluffy",
    age: 4,
    foods: {
      favorite: "tuna",
      leastFav: "oranges"
    },
    eyeColor: "blue",
    meow() {
      alert("meeowww")
    }
  }
  
  cat.meow()
  cat.foods.favorite

document.addEventListener("click", greatFunction)

function greatFunction() {
  alert ("helllllooo there!")
}

// Arrays Day 3 of JavaScript - LearnWebCode 
let myFavNumb = [
    9, 2, 8, 7, 4
  ]
  
  let myWords = [
    "red", "orange", "yellow"
  ]
  let myPets = [
    {name:"tuna", species: "cat"},
    {name:"red", species: "dog"}
       ]
  
  myWords.push("green")
  console.log(myWords)
  
  let myName = "Sarah";
  console.log(myName.toUpperCase());
  console.log(myName);
  console.log(myName.length);
  
  let myNumber = 7.89;
  console.log(myNumber.toFixed());
  
  myWords.splice([1], 1);
  console.log(myWords);
  
  console.log(myFavNumb[2]);
  console.log(myPets[1].species);

//   Making Decisions Day 5 - LearnWebCode 
let strawberryCount = 5;

if(strawberryCount > 9) {
  document.write("Congrats!")
} else {
  document.write("Sorry, we do not ship orders that small.");
}

let strawberryCounts = 2;


while (strawberryCounts <= 25) {
  document.write("there are "+ strawberryCounts + " strawberries.<br>")
  strawberryCounts++
}


// Higher Order Functions Day Day 6 - LearnWebCode 

document.addEventListener("click", greatFunction);

function greatFunction() {
  alert("Thank you for clicking.");
}

function doubleMe(x) {
    return x *2
  }
  
  document.write(doubleMe(20));

  function createMultiplier(multiplier) {
    return function(x) {
      return x * multiplier
    }
  }
  
  let doubleMes = createMultiplier(2);
  let tripleMes = createMultiplier(3);
  let quadrupleMe = createMultiplier(4);
  
  document.write(doubleMes(10));
  console.log(doubleMe(12));
  
  document.write(tripleMes(10));
  
  document.write(quadrupleMe(15));

let myColors = ["red", "orange", "yellow", "blue"];

myColors.forEach(saySomething)

function saySomething(color) {
  document.write("The color " + color + " is a great color.<br>")
}

myColors.push("green");

console.log(myColors);

// Returning vs Mutating Day 7 - LearnWebCode 

let pet =[
    {name: "fluffy", species: "cat", age: 2},
    {name: "Ruff", species: "dog", age: 3},
    {name: "Hopper", species: "frog", age: 1}
  ]
  
  pets.push({name: "Dynamite", species: "fish", age: 4})
   console.log(pet);
    console.log(pet.push({name:"Honey", species: "hamster", age: 5}));

    let pets =[
        {name: "fluffy", species: "cat", age: 2},
        {name: "Ruff", species: "dog", age: 3},
        {name: "Hopper", species: "frog", age: 1}
      ]
      
      pets.push({name: "Dynamite", species: "fish", age: 4})
       console.log(pets);
      console.log(pets.push({name:"Honey", species: "hamster", age: 5}));
      
      let ourTest = pets.map(nameOnly)
      
      function nameOnly(x) {
        return x.name;
      }
      
      console.log(ourTest);
      
      let animal = pets.filter(onlyDogs);
      
      function onlyDogs(x) {
        // return true || false 
        return x.species == "dog";
      }
      
      console.log(animal);
      
      function onlyBabies(x) {
        return x.age < 5;
      }
      
      
      let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly);
      
      console.log(babyDogNames);

    //   done with days of JavaScript from Youtube 
