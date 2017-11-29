$(document).ready(function(){
	var username = $("#post-user").text();
	$("#post-load").load("getNewsFeed.php", {"username":username});
	
	$("#post-button").click(function(){
		var value = $("#post-text").val();
		if(value == ""){
			
		}else{
			$("#post-load").load("newsFeed.php", {"username":username, "value":value});

		}
		setTimeout(location.reload.bind(location), 50);
		// location.reload();
	});
	$("#post-text").on('keypress', function(e){
		if(e.which === 13){
			var value = $("#post-text").val();
			if(value == ""){
				
			}else{
				$("#post-load").load("newsFeed.php", {"username":username, "value":value});

			}
			setTimeout(location.reload.bind(location), 50);
		}
	});
});