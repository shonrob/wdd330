//retrieves a JSON file to get information from.
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//put cities into an array
const cities = [];

// Having a way to get the information to use it.
//fetching the api        
fetch(endpoint)
//gathering the information from the "blob" to convert the raw info to a JSON-so you can retrieve the data.
//blob.jason will return another promise
.then(blob => blob.json())
//.then data = give you the data from the json. cities.push(...data)= calls the cities and 
    //pushes the info into a spread(...) and giving the data.
.then(data => cities.push(...data));


//function to filter through the cities
function findMatches(wordToMatch, cities) {
    //filter through the cities to find a place that will match.
    return cities.filter(place => {
    // RegExp object is used for matching text with a pattern.
        //g = global look through the entire string
        //i = insensitive characters lowercase and uppercase
    const regex = new RegExp(wordToMatch, 'gi');
    // look into place then city to match the regex from the user input to the json file...city or state.
        return place.city.match(regex) || place.state.match(regex)
    });
}

//creates a function to put in commas
function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
//Create a display of finds
function displayMatches() {
    // once it finds the regex or the string of letters that are the same in the json file it returns that object.
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        // this regex is going to find the same string of letters and add a highlight class to this.value
        const regex = new RegExp(this.value, 'gi');
        //putting the city name in a span tag with the highlighted portion that matches what the user puts in.
        const cityName = place.city.replace(regex, `<span class = "hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class = "hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>  
            `;
    //it returns an array so by adding the join it put it into a string.
    }).join('');
    suggestions.innerHTML = html;
}

//finding the regex in any class that has search
const searchInput = document.querySelector('.search');
//finding the regex in any class that has suggestions
const suggestions = document.querySelector('.suggestions');

//eventlistener for a change in the input box
searchInput.addEventListener('change', displayMatches);
//eventlistener for a keyup in the input box  , not needed just another way to have it listen
searchInput.addEventListener('keyup', displayMatches);