
      $(document).on('pageinit', function() {
			initMap();
		})

		function initMap() {
			var mapDiv = document.getElementById('map');
     		var map = new google.maps.Map(mapDiv, {
      			center: {lat: 40.786152, lng: -73.975418},
      			zoom: 15
    		});
    		var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    		var contentString = '<p> Alex Smith is going to live here starting July 2nd </p>';
    		var contentString1 = '<p> Bianca Boss is going to live here starting June 29th </p>';
    		var contentString2 = '<p> Tuongvan Le is going to live here starting August 7th </p>';
    		var contentString3 = '<p> You will be living here starting July 19th! Drag the pin to change your anticipated apartment location! </p>';
    		var infowindow = new google.maps.InfoWindow({
    			content: contentString
  			});
			var marker =  new google.maps.Marker({
  				position: {lat: 40.786152, lng: -73.975418},
  				map: map,
  				info: contentString
			});
		 	marker.addListener('click', function() {
				infowindow.open(map, marker);
			})
			var marker1 = new google.maps.Marker({
  				position: {lat: 40.788152, lng: -73.97545},
  				map: map,
  				info: contentString1
			});
			var marker2 = new google.maps.Marker({
  				position: {lat: 40.789152, lng: -73.97556},
  				map: map,
  				info: contentString2
			});
			var marker3 = new google.maps.Marker({
  				position: {lat: 40.78479, lng: -73.97556},
  				info: contentString3,
  				draggable:true

			});
			marker3.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.setContent(this.info);
				infowindow.open(map, this);
			})
			google.maps.event.addListener(marker1, 'click', function() {
				infowindow.setContent(this.info);
				infowindow.open(map, this);
			})
			google.maps.event.addListener(marker2, 'click', function() {
				infowindow.setContent(this.info);
				infowindow.open(map, this);
			})
			google.maps.event.addListener(marker3, 'click', function() {
				infowindow.setContent(this.info);
				infowindow.open(map, this);
			})
			$("#button").bind("click",
				function(event, ui) {
					marker3.setMap(map);		
			})
			$("#remove").bind("click",
				function(event, ui) {
					marker3.setMap(null);		
			})

		}