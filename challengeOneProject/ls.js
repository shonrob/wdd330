import {toDos} from './todos.js';

function checkStorage(){
    if(localStorage.getItem('myData')){
        const lsData = JSON.parse(localStorage.getItem('myData'));
        return lsData;
    } else {
        return false;
    }
}

function populateLs(data){
    let stringObject = JSON.stringify(data)
    localStorage.setItem('myData', stringObject);    
}


export {checkStorage, populateLs};