
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: 58.162767,
            lng: -5.216005
        }
    });
    
    var map1 = new google.maps.Map(document.getElementById("map1"), {
        zoom: 4,
        center: {
            lat: 37.799767,
            lng:  -122.434178
        }
    });

       var map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 4,
        center: {
            lat: -17.996430,
            lng:  145.794393
        }
    });

          var map3 = new google.maps.Map(document.getElementById("map3"), {
        zoom: 4,
        center: {
            lat: -21.622705,
            lng:  14.224223
        }
    });






            var map4 = new google.maps.Map(document.getElementById("map4"), {
        zoom: 4,
        center: {
            lat: 35.359034, 
            lng: 138.726510
        }
    });


             var map5= new google.maps.Map(document.getElementById("map5"), {
        zoom: 4,
        center: {
            lat: -38.950404,
            lng: 176.423715
        }
    });


             var map6= new google.maps.Map(document.getElementById("map6"), {
        zoom: 4,
        center: {
            lat: -29.996407, 
            lng: -70.978098
        }
    });


             var map7= new google.maps.Map(document.getElementById("map7"), {
        zoom: 4,
        center: {
            lat: 52.812447, 
            lng: -117.894291
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

   var locations1 = [{
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


