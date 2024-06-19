function getComputerChoice() {
  let val = Math.random();
  if (val < 0.33) {
    return "Rock";
  } else if (val < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Choose rock, paper, or scissors!");
  return choice.toLowerCase();
}

// Main method
getComputerChoice();
getHumanChoice();