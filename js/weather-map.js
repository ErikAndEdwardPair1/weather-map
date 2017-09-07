"use strict"

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: "04770abddfc55e155e46bb7e374c70eb",
    q:     "San Antonio, TX"
});

$.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "04770abddfc55e155e46bb7e374c70eb",
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log(data);
});