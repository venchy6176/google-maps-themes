function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -6.779512,
            lng: 39.207105,
        },
        zoom: 20,
        mapId: 'b065af687fd4db3e',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
    });
}