function appendList(myId,message){
    $('#taskList').append("<a href='#' class='list-group-item' id='" + myId + "'>" + message + "</a>");
}

$(document).ready(function () {
    var i = 0;
    for (i = 0; i < localStorage.length; i++) {
    	var taskID = "task-" + i;
    	appendList(taskID, localStorage.getItem(taskID)); 
    }
    $('#taskEntryForm').click(function () {
        if ($('#taskInput').val() !== "") {
            var taskID = "task-" + i;
            var taskMessage = $('#taskInput').val();
            localStorage.setItem(taskID, taskMessage);
          	appendList(taskID,taskMessage);
            var task = $('#' + taskID);
            task.css('display', 'none');
            task.slideDown();
          	task.css('display', 'block');
            $('#taskInput').val("");
            i++;
        }
        return false;
    });

    $('#taskList').on("click", "a", function (event) {
        self = $(this);
        taskID = self.attr('id');
        localStorage.removeItem(taskID);
        self.slideUp('slow', function () {
            self.remove();
        });

    });


});
