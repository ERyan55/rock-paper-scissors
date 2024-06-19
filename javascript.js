// Variable declarations
let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `both players chose ${humanChoice}, try again.`;
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

// Main method
console.log(playRound(getHumanChoice(), getComputerChoice()));
