function getComputerChoice() {
  let val = Math.random;
  if (val < 0.33) {
    return "Rock";
  } else if (0.33 < val < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
