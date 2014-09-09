/**
 * Prototype specific Google Maps scripts
 *
 */
$(function() {
  
  /**
   * Google Maps config
   */
  function initMaps() {
    $('#issues-map').gmap3({
      map: {
        options: {
          center: [55.603466,12.99416],
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false,
          navigationControl: true,
          scrollwheel: false,
          streetViewControl: false
        }
      },
      marker: {
        values: [
          {latLng: [55.611375,12.974193]},
          {latLng: [55.604975,12.965953]},
          {latLng: [55.60032,12.986209]},
          {latLng: [55.617143,12.994939]},
          {latLng: [55.594464,12.992965]},
          {latLng: [55.594404,13.007062]},
          {latLng: [55.599859,13.004294]},
          {latLng: [55.597107,12.967451]},
          {latLng: [55.590605,12.967976]},
          {latLng: [55.590636,12.989111]},
          {latLng: [55.588192,12.997727]}
        ],
        options:{
          draggable: false,
          icon: new google.maps.MarkerImage(
            'gui/i/map-marker-green.png',
            new google.maps.Size(32, 37, 'px', 'px')
          )
        }
      }
    });
  }
  
  
  /**
   * Google Maps toggle
   */
  if ($('body').hasClass('public')) {
    var overviewHeading = $('.issues-overview > h2');
    overviewHeading.append('<a href="#" class="toggle-map">Visa ärenden på karta</a>');
    overviewHeading.after('<div id="issues-map" class="map"></div>');
  }
  
  var toggleMap = $('.toggle-map');
  var googleMap = $('#issues-map');
  
  googleMap.hide();
  
  toggleMap.on('click', function(e){
    googleMap.slideToggle();
    initMaps();
    e.preventDefault();
  });
  
});