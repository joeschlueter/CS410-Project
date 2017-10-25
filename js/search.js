$(document).ready(function() {
	 var city = "";
navigator.geolocation.getCurrentPosition(success, error);

        function success(position) {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)

            var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

            $.getJSON(GEOCODING).done(function(location) {
                console.log(location)
            })
        }
        function error(err) {
            console.log(err)
        }
		navigator.geolocation.getCurrentPosition(success, error);

        function success(position) {

            var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';

            $.getJSON(GEOCODING).done(function(location) {
                
                city = location.results[0].address_components[2].long_name;
                var search = $("#searchBar").val(city)
            })

        }

        function error(err) {
            console.log(err)
        }


		 
		$("#searchBar").val(city);
		$(".load").load("search/query_search.php", {"search" : city});
	
	
	$("#searchButton").click(function(){
		
			var search = $("#searchBar").val();
			if(search == ""){
				
			}else{
				$(".load").load("search/query_search.php", {"search" : search});
			}
	});
	$("#searchBar").on('keypress', function(e){
		if(e.which === 13){
			var search = $("#searchBar").val();
			if(search ==""){
				
			}else{
				$(".load").load("search/query_search.php", {"search" : search});
			}
			
		}
		
	});
});