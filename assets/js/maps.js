
/*Scotland*/

function initMap() {
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
           mapTypeId: google.maps.MapTypeId.HYBRID,
            center: {
            lat: 58.162767,
            lng: -5.216005
        }
        });

/*Usa*/
         var map1 = new google.maps.Map(document.getElementById("map1"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: 37.799767,
            lng:  -122.434178
        }
    });
  
 

/*EndUsa*/



/*Australia*/

       var map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -17.996430,
            lng:  145.794393
        }
    });


 /*EndAustralia*/



 /*Namibia*/
          var map3 = new google.maps.Map(document.getElementById("map3"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -21.622705,
            lng:  14.224223
        }
    });

/*EndNamibia*/




/*EndNamibia*/


/*Japan*/
            var map4 = new google.maps.Map(document.getElementById("map4"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: 35.359034, 
            lng: 138.726510
        }
    });


/*EndJapan*/


/*NewZealand*/

             var map5= new google.maps.Map(document.getElementById("map5"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -38.950404,
            lng: 176.423715
        }
    });

/*EndNewZealand*/




/*Chile*/
             var map6= new google.maps.Map(document.getElementById("map6"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -29.996407, 
            lng: -70.978098
        }
    });
/*EndChile*/



/*Canada*/
       var map7= new google.maps.Map(document.getElementById("map7"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: 52.812447, 
            lng: -117.894291
        }
    });
/*EndCanada*/


         directionsRenderer.setMap(map);

        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsRenderer);
        };
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);
      }

      function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        directionsService.route(
            {
              origin: {query: document.getElementById('start').value},
              destination: {query: document.getElementById('end').value},
              travelMode: 'DRIVING'
            },
            function(response, status) {
              if (status === 'OK') {
                directionsRenderer.setDirections(response);
              } else {
                window.alert('Directions request failed due to ' + status);
              }
            });
      }


