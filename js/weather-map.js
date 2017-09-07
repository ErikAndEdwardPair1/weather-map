"use strict";

var weatherAPI="04770abddfc55e155e46bb7e374c70eb";


$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherAPI,
    q:     "San Antonio, TX",
    units: "imperial"
}).done(function(data) {
    console.log("WEATHER");
;    console.log(data);

    /* Show the temp in Farenheight (imperial) and remove the decimal places*/

    var maxTemp = data.main.temp_max;
    maxTemp = maxTemp.toFixed(0);

    var minTemp = data.main.temp_min;
    minTemp = minTemp.toFixed(0);

    $('#city').append(maxTemp + "<span>&#176; / </span>" + minTemp + "<span>&#176;</span>");
});



$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherAPI,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log("FORECAST");
    console.log(data);
});

var mapOptions={
    zoom:3,
    center:{
        lat:20,
        lng:-98
    }
};

var map= new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

var address = "North America";

var geocoder = new google.maps.Geocoder();

geocoder.geocode({ "address": address }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
    } else {
        alert("Geocoding was not successful - STATUS: " + status);
    }
});