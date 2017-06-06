// When the user clicks the marker, an info window opens.
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 42.1497, lng: -74.9384},
    styles:[
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });
  var contentString = '<img src="images/network-monterrey.jpg" align="left">'+'<div id="info">'+
  '<div class="dots" title="San Francisco" id="san-francisco">'+'</div>'+
  '<div class="tooltiptext">'+'<div class="city-img" id="san-francisco-th">'+'</div>'+'<div class="details long_name">'+'<div class="title">'+'San Francisco - USA'+'</div>'+'<div class="count">'+'3 Ecosystems'+'</div>'+'</div>'+'</div>'+'</div>';
  var infoWin = new google.maps.InfoWindow({
    content: contentString
  });
  var image = 'images/marker.png';
  var markers = locations.map(function(location,i){
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Spark Labs',
      animation: google.maps.Animation.DROP,
      icon:image
    });
    google.maps.event.addListener(marker,'click',function(evt){
      infoWin.setContent(location.info+infoWin.content);
      infoWin.open(map,marker);
    })
    return marker;
  });
  /*marker.addListener('click', function() {
    infowindow.open(map, marker);
  });*/
  var markerCluster = new MarkerClusterer(map, markers,
  {imagePath:'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}
  );
}
var locations = [{
  lat: 61.3850,
  lng: -152.2683,
  info: "Alaska"
}, {
  lat: 32.7990,
  lng: -86.8073,
  info: "Alabama"
}, {
  lat: 32.9866,
  lng: -83.6487,
  info: "Georgia"
}, {
  lat: 21.1098,
  lng: -157.5311,
  info: "Hawaii"
}, {
  lat: 40.3363,
  lng: -89.0022,
  info: "Illinois"
}, {
  lat: 39.8647,
  lng: -86.2604,
  info: "Indiana"
}, {
  lat: 42.1497,
  lng: -74.9384,
  info: "New York"
}, ];

// google.maps.event.addDomListener(window, "load", initMap);
