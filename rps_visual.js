//select elements and assign to variables.
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const message = document.querySelector('#message');
const playerScoreBoard = document.querySelector('#player-score');
const compScoreBoard = document.querySelector('#comp-score');
const gameWinner = document.querySelector('#game-winner');
const resetBtn = document.querySelector('#reset-button');

//declare player and computer scores and set to 0.
let playerScore = 0;
let compScore = 0;

//upon click of weapon buttons: generate computer selection, assign player selection, and feed both to playRound function.
rockBtn.addEventListener('click', () => {
  const playerSelection = 'rock';
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener('click', () => {
  const playerSelection = 'paper';
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener('click', () => {
  const playerSelection = 'scissors';
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

//increment scores according to winner of each round and present scores and winner to player. 
function playRound(playerSelection, computerSelection) {
  switch (whoWins(playerSelection, computerSelection)) {  
    case "tie":
      message.textContent = "It's a tie!";      
      break;
    case "player":
      playerScore++;
      message.textContent = "You win!";
      break;
    case "computer":
      compScore++;
      message.textContent = "Computer wins!";
      break;
  }
  score();
}

//generate random weapon for computer to use.
function computerPlay() {
  const computerOptions = ["rock", "paper", "scissors"];
  const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computerChoice;
}
	
//determine a winner for a single weapon-vs-weapon battle.	
function whoWins(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return("tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return("computer");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return("player");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return("player");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return("tie");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return("computer");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return("computer");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return("player");
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return("tie");
  } 
}

//display score; if player or computer score is equal to 5, declare winner and disable weapon buttons.
function score() {
  playerScoreBoard.textContent = `Human: ${playerScore}`;
  compScoreBoard.textContent = `Machine: ${compScore}`;
  
  if (playerScore === 5) {
    gameWinner.textContent = "You win this time! Want to try for another? Play again!";
    gameOver(); 
} else if (compScore === 5) {
    gameWinner.textContent = "The computer wins this round. Try again!";
    gameOver();
  }
} 

function gameOver() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

//upon click of reset button: resets scores, resets displayed win/lose messages, re-enables weapon buttons.
resetBtn.addEventListener('click', () => {
  playerScore = 0;
  compScore = 0;
  message.textContent = "";
  playerScoreBoard.textContent = "";
  compScoreBoard.textContent = "";
  gameWinner.textContent = "";
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
});



