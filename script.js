var key = "14cfb4498e6f8e56ffed5252dd7f2167"; // this is my api key //
var city = "Chicago, US"; // this should be my current weather 
var url = "https://api.openweathermap.org/data/2.5/forecast";
var units;

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


    // for each of 16 weather forcasts
    for (i = 0; i < data.list.length; i++) {
      var day = $("<div>");
      day.text(data.list[0].weather[0].description)


      $("#test").append(day.text(data.list[0].weather[0].description))
    }
  };

  // how about this? //

  var request = new XMLHttpRequest();

$(document).ready(function() {
  var temp = $("#temp");
  var humid = $("#humid");

  //Look for Enter key press
  $("#city").keypress(function(event) {

    var city = $("#city").val();

    //13 is the keycode for Enter
    if (event.which == 13) {

      var cityData;

      //Checks for units selected by user between the two radio buttons
      var unitType = $("input[name='units']:checked").val();
      if (unitType === "f") {
        units = "&units=imperial";
        findWeather(units);
      } else {
        units = "&units=metric";
        findWeather(units);
      }

      //JSON API call function
      function findWeather(data) {
        $.getJSON(url + city + apiKey + units, function(json) {

          //Assign JSON data to cityCata variable
          cityData = json;

          //Add temperature to the Temperature div element
          temp.html("Temperature: " + cityData.main.temp + " &deg;" + unitType.toUpperCase());

          //Add humidity to the Humidity div element
          humid.html("Humidity: " + cityData.main.humidity + " %");

          //Fetch and add icon to the icon div element
          $("#icon").html("<img src='http://openweathermap.org/img/w/" + cityData.weather[0].icon + ".png' alt='Weather icon.'>");
          console.log(cityData.weather.icon);
        });
      }

    }
  });

});
