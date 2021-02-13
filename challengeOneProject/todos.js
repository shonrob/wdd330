import {populateLs} from './ls.js';
let toDos = []

function makeNewToDoItem(toDoName){
    let newToDo = {
        id: Date.now(),
        content: toDoName,
        completed: false
    }
    toDos.push(newToDo);
    populateLs(toDos);
    return newToDo;
}

function toRemoveItem(id){
    let sameId = toDos.findIndex(toDo => toDo.id === parseInt(id));
        toDos.splice(sameId, 1);
        populateLs(toDos);

}

function populateDataArray(data){
    toDos = data
}

function toggleStatus(id) {
    // us id to find correct todo
    let indexId = toDos.findIndex(toDo => toDo.id === parseInt(id));
    //change complete status of that todo
    toDos[indexId].completed = !toDos[indexId].completed;
    //update LS
    populateLs(toDos); 
}

export {toDos, makeNewToDoItem, toRemoveItem, populateDataArray, toggleStatus};

