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


 /*EndScotland*/
 var map1 = new google.maps.Map(document.getElementById("map1"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: 37.799767,
            lng:  -122.434178
        }
    });
/*EndScotland*/

/*California*/
 var map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -27.155908,
            lng:  149.062594
        }
    });
/*EndCalifornia*/


/*Australia*/
 var map3 = new google.maps.Map(document.getElementById("map3"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -21.622705,
            lng:  14.224223
        }
    });
/*EndAustralia*/


/*Namibia*/
var map4 = new google.maps.Map(document.getElementById("map4"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: 35.359034, 
            lng: 138.726510
        }
    });
/*EndNamibia*/

/*Japan*/
   var map5= new google.maps.Map(document.getElementById("map5"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -38.950404,
            lng: 176.423715
        }
    });
/*EndJapan*/

/*Newzealand*/
 var map6= new google.maps.Map(document.getElementById("map6"), {
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        center: {
            lat: -29.996407, 
            lng: -70.978098
        }
    });
/*EndNewzealand*/


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


/*Scotland*/
        var locations = [
         {lat:  57.477591, lng: -4.228896, title:'Iverness'},
         {lat:  57.365951, lng: -4.231002},
         {lat:  57.416832, lng: -5.716715},
         {lat:  58.637384, lng: -3.069141}
       
    ];
/*EndScotland*/

/*California*/
  var locations1 = [
        {lat:  36.488857, lng: -117.103137},
        {lat:  35.644087, lng: -121.189113},
        {lat:  36.504024, lng: -121.931493},
        {lat:  34.105477, lng: -118.333516},
        {lat:  41.245516, lng: -123.546282}   
    ];
/*EndCalifornia*/

/*Australia*/
  var locations2 = [
        {lat:-33.865033, lng: 151.194245},
        {lat:-27.446482, lng: 153.034738},
        {lat:-16.913745, lng: 145.762068},
        {lat:-27.998895, lng: 153.431733}
        
    ];
/*EndAustralia*/


/*Namibia*/
  var locations3 = [
        {lat: -22.561839, lng: 17.071494},
        {lat: -18.855510, lng: 16.329277},
        {lat: -23.331804, lng: 15.905864},
        {lat: -20.057779, lng: 13.188174}     
    ];
/*EndNamibia*/


/*Japan*/
  var locations4 = [
        {lat: 35.360800, lng: 138.727320},
        {lat:  35.211008, lng: 139.003292},
        {lat:  35.216303, lng: 138.983972},
        {lat:  42.929005, lng: 143.676134},
       
    ];
/*EndJapan*/


/*NewZealand*/
  var locations5 = [
        {lat: -39.014378, lng: 175.738937},
        {lat: -43.383962, lng: 170.177739},
        {lat: -44.635110, lng: 167.897205},
        {lat: -36.848656, lng: 174.760406}       
    ];
/*EndNewZealand*/

/*Chile*/
  var locations6 = [
        {lat: -27.544598, lng:-69.889224},
        {lat: -20.231122, lng:-70.132498},
        {lat: -29.903617, lng:-71.250971},
        {lat: -39.817596, lng:-73.240575},
        {lat: -33.447504, lng:-70.676530}


       
    ];
/*EndChile*/

/*Canada*/
  var locations7 = [
        {lat: 52.184636, lng:-117.052392},
        {lat: 52.873428, lng:-117.954219},
        {lat: 51.425488, lng:-116.176636},
        {lat: 51.613402, lng:-112.642690},
        
    ];
/*EndCanada*/



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