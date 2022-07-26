const computer = document.getElementById("computer");
const user = document.getElementById("usser");
const gameOver = document.getElementById("gameover");
const tie = document.getElementById("tie");

let rockbutton = document.getElementById("rock");
let paperbutton = document.getElementById("paper");
let scissorsbutton = document.getElementById("scissors");

rockbutton.addEventListener("click", playGame);
paperbutton.addEventListener("click", playGame);
scissorsbutton.addEventListener("click", playGame);

function computerinput() {
  const choice = ["rock", "paper", "scissors"];
  const rand = Math.floor(Math.random() * choice.length);
  return choice[rand];
}

function score() {}
let playerScore = 1;
let computerScore = 1;

function playGame(e) {
  let clickedValue = e.target.id;
  let computerChoice = computerinput();
  if (playerScore === 5) {
    gameOver.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "GAMEOVER...You won";
    gameOver.appendChild(message);
  } else if (computerScore === 5) {
    gameOver.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "GAMEOVER...I won";
    gameOver.appendChild(message);
  } else if (clickedValue === "rock" && computerChoice === "scissors") {
    user.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "Rock beat scissors: You scored";
    user.appendChild(message);
    let score = document.createElement("p");
    score.textContent = playerScore++;
    user.appendChild(score);
  } else if (clickedValue === "scissors" && computerChoice === "rock") {
    computer.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "Rock beat scissors: I scored";
    computer.appendChild(message);
    let score = document.createElement("p");
    score.textContent = computerScore++;
    computer.appendChild(score);
  } else if (clickedValue === "paper" && computerChoice === "rock") {
    user.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "paper beat rock: You scored";
    user.appendChild(message);
    let score = document.createElement("p");
    score.textContent = playerScore++;
    user.appendChild(score);
  } else if (clickedValue === "rock" && computerChoice === "paper") {
    computer.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "paper beat rock: I scored";
    computer.appendChild(message);
    let score = document.createElement("p");
    score.textContent = computerScore++;
    computer.appendChild(score);
  } else if (clickedValue === "scissors" && computerChoice === "paper") {
    user.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "scissors beat paper: You scored";
    user.appendChild(message);
    let score = document.createElement("p");
    score.textContent = playerScore++;
    user.appendChild(score);
  } else if (clickedValue === "paper" && computerChoice === "scissors") {
    computer.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "scissors beat paper: I scored";
    computer.appendChild(message);
    let score = document.createElement("p");
    score.textContent = computerScore++;
    computer.appendChild(score);
  } else if (clickedValue === "scissors" && computerChoice === "scissors") {
    tie.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "scissors meet scissors: Its a tie";
    tie.appendChild(message);
  } else if (clickedValue === "rock" && computerChoice === "rock") {
    tie.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "rock meet rocks: Its a tie";
    tie.appendChild(message);
  } else if (clickedValue === "paper" && computerChoice === "paper") {
    tie.replaceChildren("");
    let message = document.createElement("p");
    message.textContent = "paper meet paper: Its a tie";
    tie.appendChild(message);
  }
}
