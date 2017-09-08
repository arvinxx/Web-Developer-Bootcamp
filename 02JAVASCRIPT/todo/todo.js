console.log("Connected!");
var lis = document.querySelectorAll("li");

console.log(lis);

for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover",function(){
		this.classList.toggle("selected");
	});

	lis[i].addEventListener("mouseout",function(){
		this.classList.toggle("unselected");
	});
	lis[i].addEventListener("click",function(){
		this.classList.toggle("done");
	})
}

