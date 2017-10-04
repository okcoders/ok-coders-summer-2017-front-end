var textFeels = "";
var windTemp = "";

var bobbyWasHere = function(data){
	console.log(data);
	textFeels = data.query.results.channel.item.condition.text;
	windTemp = data.query.results.channel.item.condition.temp;
};

$(document).ready(function(){
	$("#getWeather").click(function(){
		$("#weatherReport").val(textFeels + " tempurature of " + windTemp);
	});
});
