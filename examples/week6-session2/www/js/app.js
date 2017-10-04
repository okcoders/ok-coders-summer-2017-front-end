// document.getElementByType()
$(document).ready(function(){

	var i = 0;
	for(i=0; i < localStorage.length; i++){
		var tkID = 'task-' + i;
		var message = localStorage.getItem(tkID);
		$("#taskList").append("<a href='#' class='list-group-item' id='" + 
			tkID + "'>" + message + "</a>" );
	}

	$("#taskAddButton").click(function(){
		var taskID = 'task-' + i;
		var message = $("#taskItem").val();
		localStorage.setItem(taskID, message);

		$("#taskList").append("<a href='#' class='list-group-item' id='" + 
			taskID + "'>" + message + "</a>" );
		$("#taskItem").val("");
		i++;
		// Make our new item pretty when it appears
		var task = $("#"+taskID);
		task.css('display', 'none');
		task.slideDown();
		task.css('display', 'block');
	});

	$("#taskList").on("click", "a", function(event){
		self = $(this);
		var taskID = self.attr('id');
		localStorage.removeItem(taskID);
		self.slideUp('slow', function(){
			self.remove();
		});
	});
});