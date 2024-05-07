"use strict"

document.getElementById("search-button").addEventListener("click", consultaAPI);

function consultaAPI() {
    let xhr, url, city, apiKey;

    city = document.getElementById("place-input").value;
    apiKey = "6500c4c1dc1a29a7de77dacbf7fc1ff2";
    url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
    xhr = new XMLHttpRequest();
    xhr.onload = function() {
        mostrarInformacion(this)
    }
    xhr.open("GET", url);
    xhr.send();
}
function mostrarInformacion(xhr) {
    let obj, city, temp, weatherDescription, codigoHtml, country, icono;
    console.log(xhr.responseText);
    obj = JSON.parse(xhr.responseText);
    city = obj.name;
    temp = Math.round(obj.main.temp);
    weatherDescription = obj.weather[0].description;
    country = obj.sys.country
    icono = 'https://openweathermap.org/img/wn/' + obj.weather[0].icon + '@2x.png';

    codigoHtml =
        "<div class='card'>" +
            "<h2 class='city-name'>" + city + "<sup>" + country + "</sup>" + "</h2>" +
            "<p class='city-temp'>" + temp + "<sup>" + "ºC" + "</sup>" + "</p>" +
            "<figure>" +
                    "<img src='" + icono + "' alt=''>" +
                    "<figcaption>" + weatherDescription + "</figcaption>" +
            "</figure>" +
        "</div>";
        console.log(icono)
    
            
    document.getElementById("cards").innerHTML += codigoHtml;


}
