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

function playGame() {
  // Variable declarations
  let humanScore = 0;
  let computerScore = 0;

  // function declarations
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`both players chose ${humanChoice}, try again.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  while (humanScore < 5 && computerScore < 5) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore === 5) {
    console.log("You won it all!");
  } else {
    console.log("You lost, better luck next time!");
  }
}

// Main method
playGame();
