var numSquares = 6;
var colors= [];
var pickedColor;

var squares = document.querySelectorAll(".square");

var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();


colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
	// body...
	reset();

})


function init() {
	//mode button
	setUpModeButton();
	setUpSquares();
	reset();
}


function reset() {
	colors= generateRandomColors(numSquares);
	
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	h1.style.background = 'steelblue';

	for (var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		if (colors[i]) {
			squares[i].style.display = 'block';

			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";

		}
		this.textContent = "New Colors";
		messageDisplay.textContent = "";
	}	
}

function setUpSquares(){
	// body...
	for (var i = 0; i < squares.length; i++) {
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		var clickColor = this.style.background;
		
		if(clickColor === pickedColor){
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play Again?";

			changeColor(clickColor);
			h1.style.background = clickColor;
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent = "Try Again";
		}})
}	
}

function setUpModeButton() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

			reset();
		})
	}

}


function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(number) {
	// body...
	var arr = [];
	for (var i = 0; i < number; i++) {

		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	// body...
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}