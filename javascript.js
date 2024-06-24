// Variable initializations
let humanScore = 0;
let computerScore = 0;
const text = document.querySelector("#text");

// Function declarations
function getComputerChoice() {
  let val = Math.random();
  if (val < 0.33) {
    return "rock";
  } else if (val < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Choose rock, paper, or scissors!");
  return choice.toLowerCase();
}

// Increments score based on winner
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    text.textContent = `Both players chose ${humanChoice}. The score is still ${humanScore} - ${computerScore}.`;
    document.body.appendChild(text);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    text.textContent = `You win, ${humanChoice} beats ${computerChoice}. The score is ${humanScore} - ${computerScore}`;
    document.body.appendChild(text);
  } else {
    computerScore++;
    text.textContent = `You lose, ${humanChoice} loses to ${computerChoice}. The score is ${humanScore} - ${computerScore}`;
    document.body.appendChild(text);
  }
  if (humanScore === 5) {
    text.textContent = "You win it all!";
    document.body.appendChild(text);
  }
  if (computerScore === 5) {
    text.textContent = "You lost, better luck next time!";
    document.body.appendChild(text);
  }
}

// Update points based on button selection
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);
