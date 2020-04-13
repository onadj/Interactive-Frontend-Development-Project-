
/*Scotland*/
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: 58.162767,
            lng: -5.216005
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 58.172211, lng: -5.283393},
        { lat: 57.365945, lng: -4.230980 },
        { lat: 57.419092, lng: -5.708599 }
    ];


    

/*End Scotland*/


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


/*Markers*/

      var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

}


/*EndMarkers*/