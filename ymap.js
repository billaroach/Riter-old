var myGeocoder = ymaps.geocode("Moscow");
myGeocoder.then(
    function (res) {
        // Выведем в консоль данные, полученные в результате геокодирования объекта.
        console.log('Все данные геообъекта: ', res.geoObjects.get(0).properties.getAll());
    },
    function (err) {
        // Обработка ошибки.
    }
);