var words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "peach", "quince", "raspberry", "strawberry", "tangerine", "ugli", "watermelon"];
var selectedWord = "";
var guessedWord = [];
var wrongLetters = [];
var hangmanParts = 0;

function newGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedWord = Array(selectedWord.length).fill("_");
  wrongLetters = [];
  hangmanParts = 0;
  updateDisplay();
}

function guessLetter(letter) {
  if (selectedWord.includes(letter)) {
    for (var i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === letter) {
        guessedWord[i] = letter;
      }
    }
  } else {
    wrongLetters.push(letter);
    hangmanParts++;
  }

  updateDisplay();
  checkWinLoss();
}

function updateDisplay() {
  var wordElement = document.getElementById("word");
  wordElement.textContent = guessedWord.join(" ");

  var hangmanElement = document.getElementById("hangman");
  hangmanElement.style.backgroundImage = "url('hangman_" + hangmanParts + ".png')";

  var lettersElement = document.getElementById("letters");
  lettersElement.innerHTML = "";
  for (var i = 0; i < 26; i++) {
    var letter = String.fromCharCode(65 + i);
    var button = document.createElement("button");
    button.textContent = letter;
    button.addEventListener("click", function (event) {
      guessLetter(event.target.textContent);
    });
    lettersElement.appendChild(button);
  }
}

// Call newGame() to start a new game when the page loads
newGame();
