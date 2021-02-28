//Query Selectors
var backButton = document.getElementById('offcon');
var prev = document.getElementById('previous');
var next = document.getElementById('next');


//Add Event Listener

document.getElementById('next').addEventListener('click', nextButton);
document.getElementById('previous').addEventListener('click', previousButton);
document.getElementById('offcon').addEventListener('click', connectionoff);
document.addEventListener('DOMContentLoaded', getList)

//Constants

constUrl = new URL ('https://swapi.dev/api/people/?page=1');
constUrl1 = new URL ('https://swapi.dev/api/people/?page=1');
constUrl2 = new URL ('https://swapi.dev/api/people/?page=1');



//functions

function show(){
    
    if(backButton.style.display === "none"){
        backButton.style.display = "flex"
        prev.style.display = "none";
        next.style.display = "none";
    }
    else if(backButton.style.display === "flex"){
        backButton.style.display = "none";
        prev.style.display = "block";
        next.style.display = "block";
       
    }
}


function getList(){
    nextButton();
   
}

function connectionoff(){
    fetch(constUrl2)
    .then((res) => res.json())
     .then ((data) => {  
         
        const names = data.results.map(user => {
            return `<p id ="getdetails" onclick="getdetails()">${user.name}</p>`       
       }).join('');
       
        document.getElementById('output').innerHTML = names;

     })
     show();
   
}


function nextButton(){
    fetch(constUrl)
    .then((res) => res.json())
    .then ((data) => {
       const names = data.results.map(user => {
            return `<p id ="getdetails" onclick="getdetails()">${user.name}</p>`       
       }).join('');
       
        document.getElementById('output').innerHTML = names;
        constUrl.href = data.next;

        if(data.previous == null){
            constUrl.href = data.next;
        }
        else
        constUrl1.href = data.previous;
        constUrl2.href = data.next;
        constUrl2.href = constUrl2.href.replace(/(\d+)+/g, function(match, number) {
            return parseInt(number)-1});
    }) 
}


function previousButton(){
    fetch(constUrl1)
    .then((res) => res.json())
    .then ((data) => {
    const names = data.results.map(user => {
            return `<p id ="getdetails" onclick="getdetails()">${user.name}</p>`
       }).join('');

        document.getElementById('output').innerHTML = names;
        constUrl.href = data.next;
       
        if(data.previous == null){
            constUrl.href = data.next;
        }
        else
        constUrl1.href = data.previous;
        constUrl2.href = constUrl2.href.replace(/(\d+)+/g, function(match, number) {
            return parseInt(number)-1});
     })
}


function getdetails(){
    show();
    let item = event.target.textContent;
        fetch(constUrl2)
        .then((res) => res.json())
         .then ((data) => {            
           const names = data.results.map(user => {
               if(item == user.name){
                return `
                    <p><b>Name:</b> ${user.name}</p>
                    <p><b>Height: </b>${user.height}</p>
                    <p><b>Hair Color:</b> ${user.hair_color}</p>
                    <p><b>Skin Color:</b> ${user.skin_color}</p>
                    <p><b>Eye Color:</b> ${user.eye_color}</p>
                    <p><b>Birth Year:</b> ${user.birth_year}</p>
                    <p><b>Gender: ${user.gender}</p>
                `
               }
           }).join('');
           document.getElementById('output').innerHTML = names;
         })
         
         
}

