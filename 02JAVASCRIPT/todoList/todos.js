console.log("Connected!")
var todos = [];
var input = prompt("What would you to do?");

while (input !== "quit") {
	// statement
	
	if (input === "list") {	
		console.log("***********");
		todos.forEach(function(todo,i){
			console.log(i +": "+ todo)
		});
		console.log("***********");
	}
	else if (input === "new") {
		var newTodo = prompt("Enter you todo");
		todos.push(newTodo);
	}

	input = prompt("What would you to do?");

}
console.log("OK,you quit.")
