function showCoordinates(position) {
    var city = document.getElementById("city");
    var phone = document.getElementById("phone-number");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        city.innerHTML = "Error.";
        phone.innerHTML = "Error.";
    }
    function showPosition(position) {
        var lng = position.coords.longitude;
        var ltd = position.coords.latitude;

        var requestURL = `https://geocode-maps.yandex.ru/1.x/?apikey=9aa34011-83da-49de-86f0-65593d288efa&format=json&geocode=${lng},${ltd}&kind=locality&results=1`;

        var request = new XMLHttpRequest();

        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
            var myCity = request.response['response']['GeoObjectCollection']['featureMember'][0]['GeoObject']['name'];
            city.innerHTML = `ВАШ ГОРОД: ${myCity.toUpperCase()}`; 
            phone.innerHTML = "+7 900 000 07-77"        
        }
    }
 }

 