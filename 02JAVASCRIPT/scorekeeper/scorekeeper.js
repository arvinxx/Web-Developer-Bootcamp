console.log("Connecter");

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetGame = document.getElementById("reset");
var numInput = document.querySelector("input");

var p1Score = 0;
var p2Score = 0;
var winningScore = 5 ;
var winningScoreDisplay = document.querySelector("p span");

winningScoreDisplay.textContent = winningScore;
var gameOver = false;



console.log(winningScoreDisplay);


p1Button.addEventListener("click", function () {
	if (!gameOver) {
		p1Score ++;
		console.log(p1Score);
		if (p1Score >= winningScore) {
			gameOver =true;
			p1Display.classList.add("winner");
		}
		p1Display.textContent = p1Score;
	}

})
p2Button.addEventListener("click", function () {
	if (!gameOver) {
		p2Score ++;
		console.log(p2Score);
		if (p2Score >= winningScore) {
			gameOver =true;
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}

})

resetGame.addEventListener("click", function(){
	resetGameState();
})

numInput.addEventListener("change",function() {
	/* Act on the event */
	winningScoreDisplay.textContent = this.value;
	resetGameState();
	winningScore = Number(this.value);
	console.log(winningScore);

})


function resetGameState() {
	gameOver = false;
	p1Score = p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}