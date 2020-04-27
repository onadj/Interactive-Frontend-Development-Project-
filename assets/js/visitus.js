/*VisitUs*/
function initMap() {
    var mapVisitUs = new google.maps.Map(document.getElementById("mapVisitUs"), {
        zoom: 7,
        center: {
            lat: 52.652908, 
            lng: -6.649042
        }
    });

    var labels= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locationsVisitUs = [
        { lat: 52.652908, lng: -6.649042},
    ];

    var markersVisitUs = locationsVisitUs.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title:"MotorHome Lovers Club",
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(mapVisitUs, markersVisitUs, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

/*EndVisitUs*/
