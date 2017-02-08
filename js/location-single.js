// A $( document ).ready() block.
$(document).ready(function () {


    var myCenter = new google.maps.LatLng(-30.0292644, -51.2204043);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 14,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        var marker = new google.maps.Marker({
            position: myCenter,
            icon: 'images/marker.png'
        });

        marker.setMap(map);

        var infowindow = new google.maps.InfoWindow({
            content: "Servipac"
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

});

