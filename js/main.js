const links = [
    {
        label: "week1",
        url: "week1/index.html"
    },

    {
        label: "week2",
        url: "week2/index.html"
    },
    {
        label: "week3",
        url:"week3/index.html"
        
    },
    {
        label: "week4",
        url:"week4/index.html"
    },
    {
        label: "week5",
        url:"week5/index.html"
    },
    {
        label:"challengeOne",
        url:"challengeOneProject/index.html"
    },
    {
        label: "week7",
        url:"week7/index.html"
    },
    {
        label: "drumKitProject",
        url:"drumKitProject/index.html"
    },
    {
        label: "week8",
        url:"week8/index.html"
    }
  ]
var weeks = document.getElementById("assignments");

for (let p = 0; p < links.length; p++ ) 
    {
        var listItem = document.createElement("li");
        var a = document.createElement("a");

        a.setAttribute("href", links[p]["url"]);
        a.innerHTML = links[p]["label"];

        weeks.appendChild(listItem);
        listItem.appendChild(a);

    }