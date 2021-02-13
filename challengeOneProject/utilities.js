import {toDos, makeNewToDoItem, toRemoveItem, populateDataArray, toggleStatus} from './todos.js';
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
        listElement.setAttribute('id', toDo.id);
        if(toDo.completed) {
            listElement.classList.add("complete");
        } else {
            listElement.classList.add('incomplete');
        }
        
        let listItem = 
            `<button class="btn">
            <i class="${fa}"></i>
            </button>
            <p>${toDo.content}</p>
            <button class="btn"><i class="fas fa-trash-alt" job="delete"></i></button> 
            `
        toDoList.appendChild(listElement).innerHTML = listItem;
        let currentLi = document.getElementById(toDo.id);
        let completeBtn= currentLi.firstElementChild;
        let deleteBtn = currentLi.lastElementChild;
        
        deleteBtn.addEventListener('click', deleteButton);
        completeBtn.addEventListener('click', toggleCompleteStatus)
    };

    if (Array.isArray(toDoArray)){
        toDoArray.forEach(function(todo){
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

    let toDoId = this.parentElement.getAttribute('id');
    toRemoveItem(toDoId);
    this.parentElement.remove();
}

function initialPopulateToDos(){
    var newData = checkStorage();
    if(newData){
        populateToDos(newData);
        populateDataArray(newData);
    }

}

function toggleCompleteStatus() {
    // get the associated id 
    let toDoId = this.parentElement.getAttribute('id');
    //change compete status on toDo
    toggleStatus(toDoId);
    //change the class on parent 
    let parentNode = this.parentElement;
    if(parentNode.className === "complete") {
        parentNode.classList.remove("complete")
        parentNode.classList.add("incomplete")
    } else if(parentNode.className === "incomplete"){
        parentNode.classList.remove("incomplete")
        parentNode.classList.add("complete")
    };
    let faNode = this.firstElementChild;
    console.log(faNode);
    if(faNode.className === 'fas fa-check-circle'){
        console.log('1')
        faNode.classList.remove('fas')
        faNode.classList.remove('fa-check-circle')
        faNode.classList.add('far')
        faNode.classList.add('fa-circle')
    }else if(faNode.className === 'far fa-circle'){
        console.log('2')
        faNode.classList.remove('far')
        faNode.classList.remove('fa-circle')
        faNode.classList.add('fas')
        faNode.classList.add('fa-check-circle')
    }
}

    function filterTasks(e) {
        let count = 0;
        // grab complete class names
        let allArray = Array.from(document.querySelectorAll("#list li"));
        //grab the class name of the id
        let buttonId = e.target.id;

        if(buttonId == "all") {
          allArray.forEach((toDos) => toDos.setAttribute("style", "display: flex"));
          count = allArray.length; 
        } else {
        // filtering through each item 
        allArray.filter((toDos) => {
            // if the item does not a buttonId 
            if(!(toDos.classList.contains(buttonId))) {
                // then set the item to display none. 
                toDos.setAttribute("style", "display: none");
            } else {
                toDos.setAttribute("style", "display: flex");
                count++;   
            }
        });}
        document.getElementById('taskCount').innerHTML = `${count} Tasks`;         
    }
    document.getElementById('all').addEventListener('click', filterTasks);
    document.getElementById('incomplete').addEventListener('click', filterTasks);
    document.getElementById('complete').addEventListener('click', filterTasks); 





