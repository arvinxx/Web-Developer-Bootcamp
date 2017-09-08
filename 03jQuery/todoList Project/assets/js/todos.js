
//check Off Specific Todos By Clicking
$("ul").on("click","li",function() {
	/* Act on the event */
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click","span",function(e) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	e.stopPropagation();
	console.log("clicked!");

});


//Add new todo list
$("input[type='text']").keypress(function(e) {
	if (e.which === 13) {
		//grabbing new todo text from input
		var newTodo = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+newTodo+"</li>");
	}

});

$(".fa-plus").click(function() {
	$("input[type='text']").slideToggle();

	
});