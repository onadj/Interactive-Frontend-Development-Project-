function initMap() {


/*VisitUs*/
    var mapVisitUs = new google.maps.Map(document.getElementById("mapVisitUs"), {
        zoom: 7,
        center: {
            lat: 52.652908, 
            lng: -6.649042
        }
    });
/*EndVisitUs*/

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
var labelsVisitUs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/*EndLabels*/

/*VisitUs*/
 var locationsVisitUs = [
        { lat: 52.652908, lng: -6.649042},
    ];
/*EndVisitUs*/

/*Scotland*/
        var locations = [
         {lat:  57.477591, lng: -4.228896, title:'Iverness'},
         {lat:  57.365951, lng: -4.231002, title:'Highlands'},
         {lat:  57.416832, lng: -5.716715, title:'Bealach na Ba'},
         {lat:  58.637384, lng: -3.069141, title:'John o Groats'}
       
    ];
/*EndScotland*/

/*California*/
  var locations1 = [
        {lat:  36.488857, lng: -117.103137, title:'Death Valley'},
        {lat:  35.644087, lng: -121.189113,title:'San Simeon'},
        {lat:  36.504024, lng: -121.931493,title:'Carmel Highlands'},
        {lat:  34.105477, lng: -118.333516,title:'Hollywood'},
        {lat:  41.245516, lng: -123.546282,title:'Six Rivers National Forest'}   
    ];
/*EndCalifornia*/

/*Australia*/
  var locations2 = [
        {lat:-33.865033, lng: 151.194245, title:'Sydney'},
        {lat:-27.446482, lng: 153.034738, title:'Brisbane'},
        {lat:-16.913745, lng: 145.762068, title:'Cairns'},
        {lat:-27.998895, lng: 153.431733, title:'Surfer Paradise'}
        
    ];
/*EndAustralia*/

/*Namibia*/
  var locations3 = [
        {lat: -22.561839, lng: 17.071494, title:'Windhoek'},
        {lat: -18.855510, lng: 16.329277, title:'Etosha'},
        {lat: -23.331804, lng: 15.905864, title:'Namib Desert'},
        {lat: -20.057779, lng: 13.188174, title:'Skeleton Desert'}     
    ];
/*EndNamibia*/

/*Japan*/
  var locations4 = [
        {lat: 35.360800, lng: 138.727320, title:'Mount Fuji'},
        {lat:  35.211008, lng: 139.003292, title:'Lake Ashinoko'},
        {lat:  35.216303, lng: 138.983972, title:'Mikuni Pass'},
        {lat:  42.929005, lng: 143.676134, title:'Tokachi Subprefecture'},
       
    ];
/*EndJapan*/

/*NewZealand*/
  var locations5 = [
        {lat: -39.014378, lng: 175.738937, title:'Tongariro National Park'},
        {lat: -43.383962, lng: 170.177739, title:'Franz Jozef Glacier'},
        {lat: -44.635110, lng: 167.897205, title:'Auckland'}
              
    ];
/*EndNewZealand*/

/*Chile*/
  var locations6 = [
        {lat: -27.544598, lng:-69.889224, title:'Atacama Desert'},
        {lat: -20.231122, lng:-70.132498, title:'Iquique'},
        {lat: -29.903617, lng:-71.250971, title:'La Serena'},
        {lat: -39.817596, lng:-73.240575, title:'Valdivia'},
        {lat: -33.447504, lng:-70.676530, title:'Santiago, Andes'}


       
    ];
/*EndChile*/

/*Canada*/
  var locations7 = [
        {lat: 52.184636, lng:-117.052392, title:'Icefields Parkway'},
        {lat: 52.873428, lng:-117.954219, title:'Jasper National park'},
        {lat: 51.425488, lng:-116.176636, title:'Lake Louise'},
        {lat: 51.613402, lng:-112.642690, title:'Alberta s Badlands'},
        
    ];
/*EndCanada*/

/*VisitUsMarker*/
  var markersVisitUs = locationsVisitUs.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title:"MotorHome Lovers Club",
            label: labels[i % labels.length]
        });
    });
/*EndVisitUsMarker*/

/*ScotlandMarker*/
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title: location.title,
            label: labels[i % labels.length]
        });
    });
/*EndScotlandMarker*/

/*CaliforniaMarker*/
   var markers1 = locations1.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title: location.title,
            label: labels[i % labels.length]
        });
    }); 
/*EndCaliforniaMarker*/

/*AustraliaMarker*/
   var markers2 = locations2.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title: location.title,
            label: labels[i % labels.length]
        });
    });

/*EndAustraliaMarker*/

/*NamibiaMarker*/
   var markers3 = locations3.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title: location.title,
            label: labels[i % labels.length]
        });
    });
/*EndNamibiaMarker*/

/*JapanMarker*/
   var markers4 = locations4.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title: location.title,
            label: labels[i % labels.length]
        });
    });
/*EndJapanMarker*/

/*NewZealandMarker*/
   var markers5 = locations5.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title: location.title,
            label: labels[i % labels.length]
        });
    });
/*EndNewZealandMarker*/

/*ChileMarker*/
   var markers6 = locations6.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title: location.title,
            label: labels[i % labels.length]
        });
    });
/*EndChileMarker*/

/*CanadaMarker*/
   var markers7 = locations7.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            title: location.title,
            label: labels[i % labels.length]
        });
    });

/*EndCanadaMarker*/

/*VisitUs*/
var markerCluster = new MarkerClusterer(mapVisitUs, markersVisitUs, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

/*Scotland*/
 var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

 /*California*/
var markerCluster = new MarkerClusterer(map1, markers1, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

/*Australia*/
var markerCluster = new MarkerClusterer(map2, markers2, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

/*Namibia*/
var markerCluster = new MarkerClusterer(map3, markers3, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

/*Japan*/
var markerCluster = new MarkerClusterer(map4, markers4, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

/*NewZealand*/
var markerCluster = new MarkerClusterer(map5, markers5, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

/*Chile*/
var markerCluster = new MarkerClusterer(map6, markers6, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

/*Canada*/
var markerCluster = new MarkerClusterer(map7, markers7, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}