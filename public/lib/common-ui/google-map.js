var googleAPI = (function () {

	function init() {
		$('.s-abrir').click(function (event) {
			$('.s-map').addClass('active')
		});

		$('.s-cerrar').click(function (event) {
			$('.s-map').removeClass('active')
		});

		//google map
		var map;
		var marker;
		var latitud = -12.050000;
		var longitud = -77.050000;

		function initMap() {
			var $map = $('#google-map');

			if (!$map.length) return;

			var myLatlng = new google.maps.LatLng(latitud, longitud);
			var styles = [
				{
					"featureType": "water",
					"stylers": [
						{
							"color": "#eee"
						},
						{
							"visibility": "on"
						}
					]
				},
				// {
				// "featureType": "landscape",
				// "stylers": [
				// {
				// "color": "#f2f2f2"
				// }
				// ]
				// },
				{
					"featureType": "road",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				// {
				// "featureType": "administrative",
				// "elementType": "labels.text.fill",
				// "stylers": [
				// {
				// "color": "#444444"
				// }
				// ]
				// },
				{
					"featureType": "transit",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}
				];

			var mapOptions = {
				zoom: 15,
				center: myLatlng,
				mapTypeControl: true,
				disableDefaultUI: true,
				zoomControl: true,
				scrollwheel: false,
				styles: styles,
				draggable: true
			}

			map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

			marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon: '../images/map-pin.png'
			});
		}

		google.maps.event.addDomListener($('.nav.navbar-nav a'), 'click', initMap);
	}

	return {
		init: init
	};

})();
