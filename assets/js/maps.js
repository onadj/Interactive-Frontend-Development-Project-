
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: 58.162767,
            lng: -5.216005
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
          lat: 58.162767,
            lng: -5.216005
    }, {
           lat: 58.162767,
            lng: -5.216005
    }, {
        lat: 58.162767,
            lng: -5.216005
    }];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}

