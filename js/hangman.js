//List of hangman words to choose from
let hangmanword = [
	"CHEESE",
	"COW",
	"MACHINE",
	"MUSTARD",
	"CARD",
	"CHRISTMAS",
	"PAIN",
	"EASY",
	"JOKE",
	"SOLDIER",
	"BREEZE",
	"FEEL",
	"SQUASH",
	"RUSH",
  "BROTHER",
  "WHEAT",
  "DOCTOR",
  "FIGURE"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//This code should have something that randomizes the hangman word
function randomWord() {
  answer = hangmanword[Math.floor(Math.random() * hangmanword.length)];
}

//Make buttons that display the alphabet, prepare for headaches, future me.
//Detects the button that was clicked
//Update hangman every wrong guess
//Checks to see if game is won
//Checks to see if game is lost + insult
//Shows answer
//Mistake updater
//Restarts the game
//Maximum tries allowed
