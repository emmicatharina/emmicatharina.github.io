// Funktio
function haeSaatiedot() {
    fetch("http://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&APPID=ff17e9044bf0dcaf463272a0c62699bf")
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            // Vastauksen kirjoittaminen html-sivulle
            document.getElementById("saatiedot").innerHTML = "<p>" + responseJson.weather[0].description + "<br>Lämpötila: " + 
                responseJson.main.temp.toFixed(0) + "°<br>Tuuli: " + responseJson.wind.speed.toFixed(0) + " m/s<br>Pilvisyys: " + responseJson.clouds.all + " %";
        })
        .catch(function (error) {
            console.error(error);
            document.getElementById("vastaus").innerHTML = "<p>Tietoja haettaessa tapahtui virhe.</p>";
        })
}

haeSaatiedot();