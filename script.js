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
    showWeather(data)
  }
  
});


// This var is supposed to show the weather forecast //
var showWeather = function(data) {
    // $("#temp").text(data.main.temp) //
    $("#description").text(data.list[0].weather[0].description)
    $("#place").text(data.city.name)


    // for each of 10 weather forcasts
    for (i = 0; i < data.list.length; i++) {
      var day = $("<div>");
      day.text(data.list[0].weather[0].description)


      $("#test").append(day)
    }
  };



// $(document).ready(function() {
//     $("#btn").click(function() {
//         $.getJSON('http://ip-api.com/json', getWeather)
//     })
// });
