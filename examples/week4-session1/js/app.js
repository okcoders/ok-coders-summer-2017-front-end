var todoList = {
	todoList: [
		'Walk the dog',
		'Pick up some milk',
		'Put the kids to bed',
		'Drink... A LOT'
	],

	todo: document.getElementById('todo'),

	rmButton : function(btnNum){
		return '<input type="button" onclick="todoList.remove('+btnNum+')" value="X">';
		// return "<strong>" + btnNum + "</strong>";
	},

	draw : function(){
		// First Delete the old list
		todo.innerHTML = '';

		for(var i = 0; i < this.todoList.length; i++){
			todo.innerHTML += "<li>" + this.todoList[i]+ " " + this.rmButton(i) +"</li>";
		};
	},

	remove : function(num){
		this.todoList.splice(num,1);
		this.draw();
	},

	add :  function(){
		var action = document.getElementById("activity");

		if(action.value === ''){
			alert("Enter something in the todo list box");
		} else {
			this.todoList.push(action.value);
			action.value = '';
			this.draw();
		}
	},

	doSomeOtherFunction : function(paddTodoItemaram){
		console.log("about to do our function");
		param();
		console.log("just did our function")
	}
}

todoList.draw();
