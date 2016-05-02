Template.map.onRendered(function() {
  var self = this;
  this.autorun(function() {
    Template.currentData();
    var about = app.collections.about.findOne()
    function s() {
      var e = {
        zoom: 14,
        center: new google.maps.LatLng(54.6062033, -5.8829121),
        styles: [{
          featureType: "landscape",
          stylers: [{
            saturation: -100
          }, {
            lightness: 65
          }, {
            visibility: "on"
          }]
        }, {
          featureType: "poi",
          stylers: [{
            saturation: -100
          }, {
            lightness: 51
          }, {
            visibility: "simplified"
          }]
        }, {
          featureType: "road.highway",
          stylers: [{
            saturation: -100
          }, {
            visibility: "simplified"
          }]
        }, {
          featureType: "road.arterial",
          stylers: [{
            saturation: -100
          }, {
            lightness: 30
          }, {
            visibility: "on"
          }]
        }, {
          featureType: "road.local",
          stylers: [{
            saturation: -100
          }, {
            lightness: 40
          }, {
            visibility: "on"
          }]
        }, {
          featureType: "transit",
          stylers: [{
            saturation: -100
          }, {
            visibility: "simplified"
          }]
        }, {
          featureType: "administrative.province",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "administrative.locality",
          stylers: [{
            visibility: "off"
          }]
        }, {
          featureType: "administrative.neighborhood",
          stylers: [{
            visibility: "on"
          }]
        }, {
          featureType: "water",
          elementType: "labels",
          stylers: [{
            visibility: "on"
          }, {
            lightness: -25
          }, {
            saturation: -100
          }]
        }, {
          featureType: "water",
          elementType: "geometry",
          stylers: [{
            hue: "#ffff00"
          }, {
            lightness: -25
          }, {
            saturation: -97
          }]
        }]
      };
      var t = document.getElementById("map"),
        n = new google.maps.Map(t, e),
        r = about.name + "<br />" + about.title,
        i = new google.maps.InfoWindow({
          content: r
        }),
        s = "images/marker.png",
        o = new google.maps.Marker({
          position: e.center,
          map: n,
          icon: s
        });
      google.maps.event.addListener(o, "click", function() {
        i.open(n, o);
      });
    }
    google.maps.event.addDomListener(window, "load", s);
  });
});