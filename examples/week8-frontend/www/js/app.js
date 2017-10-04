var url = 'https://nameless-oasis-65689.herokuapp.com/';

$(document).ready(function(){
	$("#getWeather").click(function(){
			$.ajax({
			url: url,
			crossDomain: true,
			dataType: 'json',
			success: function(data){ 
				$("#weatherReport").val(data.message + " posted by " + data.author);
			},
			error: function(xhr, status){
				alert("error "+xhr);
			}
		});
		// Now Populate
	});
});
