function initMap() {

/*Scotland*/

     var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          center: {
            lat: 57.478975, 
            lng: -4.227523
        }           
        });

 /*EndScotland*/

 var map1 = new google.maps.Map(document.getElementById("map1"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: 37.799767,
            lng:  -122.434178
        }
    });

 var map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -17.996430,
            lng:  145.794393
        }
    });

 var map3 = new google.maps.Map(document.getElementById("map3"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -21.622705,
            lng:  14.224223
        }
    });

var map4 = new google.maps.Map(document.getElementById("map4"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: 35.359034, 
            lng: 138.726510
        }
    });

   var map5= new google.maps.Map(document.getElementById("map5"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -38.950404,
            lng: 176.423715
        }
    });

 var map6= new google.maps.Map(document.getElementById("map6"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -29.996407, 
            lng: -70.978098
        }
    });

var map7= new google.maps.Map(document.getElementById("map7"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: 52.812447, 
            lng: -117.894291
        }
    });

/*Labels*/
var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var labels1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var labels2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var labels3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var labels4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var labels5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var labels6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var labels7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/*EndLabels*/



    var locations = [
        { lat:  57.477591, lng: -4.228896,
         title: 'iverness'},
        
       
    ];

  var locations1 = [
        { lat:  32.718007, lng: -117.152956}
       
    ];

  var locations2 = [
        { lat:  -33.865452, lng: 151.201777 }
        
    ];


  var locations3 = [
        { lat:  -22.213850, lng: 17.036723}
        
    ];


  var locations4 = [
        { lat:  36.155671, lng: 138.172384 }
       
    ];


  var locations5 = [
        { lat:  -42.427013, lng: 172.657816}
        
    ];



  var locations6 = [
        { lat:  -27.212575, lng: -70.385904 }
       
    ];



  var locations7 = [
        { lat:  56.352779, lng: -115.053676}
        
    ];




    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

   var markers1 = locations1.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

   var markers2 = locations2.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

   var markers3 = locations3.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

   var markers4 = locations4.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

   var markers5 = locations5.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

   var markers6 = locations6.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

   var markers7 = locations7.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

 

 var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

var markerCluster = new MarkerClusterer(map1, markers1, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

var markerCluster = new MarkerClusterer(map2, markers2, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

var markerCluster = new MarkerClusterer(map3, markers3, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

var markerCluster = new MarkerClusterer(map4, markers4, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

var markerCluster = new MarkerClusterer(map5, markers5, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

var markerCluster = new MarkerClusterer(map6, markers6, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

var markerCluster = new MarkerClusterer(map7, markers7, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}