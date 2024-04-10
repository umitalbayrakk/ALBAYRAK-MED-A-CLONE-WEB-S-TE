 function initMap() {
    var myLatLng = {lat: 40.7128, lng: -74.0060}; // Örnek bir konum (New York)

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 14
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'İşyeri Konumu'
    });
}