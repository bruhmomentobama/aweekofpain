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
function generateButtons() {
  let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-dark m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

//Detects the button that was clicked
function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}
//Update hangman every wrong guess
function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.png';
}
//Checks to see if game is won
function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
    let audio = new Audio('./sound/correct.mp3');
    audio.play();
  }
}
//Checks to see if game is lost + audio
function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
    let audio = new Audio('./sound/mortis.mp3');
    audio.volume = 0.3; audio.play() ;
  }
}
//Shows answer
function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}
//Mistake updater
function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}
//Restarts the game
function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.png';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}
//Maximum tries allowed
document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
