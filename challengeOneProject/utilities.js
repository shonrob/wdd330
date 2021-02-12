import {toDos, makeNewToDoItem, toRemoveItem, populateDataArray} from './todos.js';
import {checkStorage} from './ls.js';

// selectors 
const toDoList = document.getElementById('list');
const addButton = document.getElementById('addButton');
const inputField = document.getElementById('addItemField');


// eventListeners 
window.addEventListener('load', initialPopulateToDos);
addButton.addEventListener('click', addingValueToList);


// functions 


function populateToDos(toDoArray){

    function populate(toDo) {
        let fa;
        if(toDo.completed) {
            fa = 'fas fa-check-circle'; 
        } else {
            fa = 'far fa-circle';
        }
    
        let listElement = document.createElement("li");
        let listItem = 
            `<button class="btn">
            <i class="${fa}"></i>
            </button>
            <p>${toDo.content}</p>
            <button id="${toDo.id}" class="btn"><i class="fas fa-trash-alt" job="delete"></i></button> 
            `
         toDoList.appendChild(listElement).innerHTML = listItem;
         document.getElementById(toDo.id).addEventListener('click', deleteButton);

    };

    if (Array.isArray(toDoArray)){
        toDoArray.forEach(function(todo){
            console.log('todo ', todo);
            populate(todo)
        });
    } else {
        populate(toDoArray)
    }
}

function addingValueToList(event) {
    event.preventDefault();
    if(inputField.value === "" ){
        inputField.focus();
        alert("Please enter text to do for your list")
        return
    } else {
      let toDoField = inputField.value;
      inputField.value = "" ; 
      let newToDo = makeNewToDoItem(toDoField);
      console.log(newToDo);
      populateToDos(newToDo);
    }   
}

function deleteButton() {

    let toDoId = this.getAttribute('id');
    toRemoveItem(toDoId);
    let node = document.getElementById(toDoId).parentElement.remove();
}

function initialPopulateToDos(){
    var newData = checkStorage();
    if(newData){
        populateToDos(newData);
        populateDataArray(newData);
    }

}
