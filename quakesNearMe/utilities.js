function getJSON(url){
    return fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02')
    .then(Response => Response.json())
    .then(data => console.log(data));  
    .catch(function(error){
        console.log(error);
    }); 
}

