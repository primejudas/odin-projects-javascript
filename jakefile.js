console.log("WELCOME TO ROCK-PAPER-SCISSORS GAME");
console.log("Please pick a choice");

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
  if (playerScore === 5) {
    console.log("GAMEOVER...You won");
  } else if (computerScore === 5) {
    console.log("GAMEOVER...I won");
  } else if (clickedValue === "rock" && computerinput() === "scissors") {
    console.log("Rock beat scissors: You scored");
    console.log(playerScore++);
  } else if (clickedValue === "scissors" && computerinput() === "rock") {
    console.log("rock beat scissors: I scored");
    console.log(computerScore++);
  } else if (clickedValue === "paper" && computerinput() === "rock") {
    console.log("paper beat rock: You scored");
    console.log(playerScore++);
  } else if (clickedValue === "rock" && computerinput() === "paper") {
    console.log("paper beat rock: I scored");
    console.log(computerScore++);
  } else if (clickedValue === "scissors" && computerinput() === "paper") {
    console.log("scissors beat paper: You scored");
    console.log(playerScore++);
  } else if (clickedValue === "paper" && computerinput() === "scissors") {
    console.log("scisssors beat paper: I scored");
    console.log(computerScore++);
  } else if (clickedValue === "scissors" && computerinput() === "scissors") {
    console.log("scissors meet scissors: Its a tie");
  } else if (clickedValue === "rock" && computerinput() === "rock") {
    console.log("rock meet rock: Its a tie");
  } else if (clickedValue === "paper" && computerinput() === "paper") {
    console.log("paper meet paper: Its a tie ");
  }
}
