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