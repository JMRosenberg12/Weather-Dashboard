var key = "14cfb4498e6f8e56ffed5252dd7f2167"; // this is my api key //
var city = "Chicago, US"; // this should be my current weather 
var url = "https://api.openweathermap.org/data/2.5/forecast";

// supposed to call the API //
$.ajax({
  url: url, //API Call
  dataType: "json",
  type: "GET",
  data: {
    q: city, 
    appid: key,
    units: "metric",
    cnt: "10"
  },
  success: function(data) {
    console.log('Received data:', data) // For testing
    var wf = "";
    wf += "<h2>" + data.city.name + "</h2>"; // City (displays once)
    $.each(data.list, function(index, val) {
      wf += "<p>" // Opening paragraph tag
      wf += "<b>Day " + index + "</b>: " // Day
      wf += val.main.temp + "&degC" // Temperature
      wf += "<span> | " + val.weather[0].description + "</span>"; // Description
      wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
      wf += "</p>" // Closing paragraph tag
    });
    $("#showWeatherForcast").html(wf);
  }
  
});
// create a var to get and show the weather, & a document function to round the button and getWeather.
var getWeather = function(data) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather', {
        lat: data.lat,
        lon: data.lon,
        appid: "[APIKEY HERE]"
    }, showWeather, 'json');
};
// This var is supposed to show the weather forecast //
var showWeather = function(data) {
    $("#test").text("I AM CHANGED. THANKS!")
    $("#temp").text(data.main.temp)
    $("#description").text(data.weather[0].description)
    $("#place").text(data.name)
};
// this runs after being clicked //
$(document).ready(function() {
    $("#btn").click(function() {
        $.getJSON('http://ip-api.com/json', getWeather)
    })
});

// Geolocation API //

if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}

// to find my location //
function geoFindMe() {

const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');

mapLink.href = '';
mapLink.textContent = '';

// to show the number of lag and lon //
function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  status.textContent = '';
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
}
// to show if there are errors in the browser //
function error() {
  status.textContent = 'Unable to retrieve your location';
}

if (!navigator.geolocation) {
  status.textContent = 'Geolocation is not supported by your browser';
} else {
  status.textContent = 'Locating…';
  navigator.geolocation.getCurrentPosition(success, error);
}

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
