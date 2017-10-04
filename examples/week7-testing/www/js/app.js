var url = "https://intense-scrubland-30575.herokuapp.com/";

$(document).ready(function(){
	$("#taskAddButton").click(function(){
		$.ajax({
			url: url,
			crossDomain: true,
			dataType: 'json',
			success: function(data){ 
				$("#taskItem").val(data.message + " posted by " + data.author);
			},
			error: function(xhr, status){
				alert("error "+xhr);
			}
		});
		// Now Populate
	});
});
