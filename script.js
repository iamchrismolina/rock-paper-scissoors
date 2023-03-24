let buttons = document.querySelectorAll("#buttons button");
let results = document.querySelector("#results");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const roundResult = getRoundResult(playerSelection, computerSelection);

  if (roundResult === "win") {
    results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (roundResult === "lose") {
    results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else {
    results.textContent = `It's a tie! You both chose ${playerSelection}.`;
  }

  updateScore();

  if (playerScore === 5) {
    results.textContent = `Congratulations! You won the game ${playerScore}-${computerScore}.`;
    disableButtons();
  } else if (computerScore === 5) {
    results.textContent = `You lost the game ${computerScore}-${playerScore}. Better luck next time!`;
    disableButtons();
  }
}

function getRoundResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "win";
    } else {
      return "lose";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "win";
    } else {
      return "lose";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "win";
    } else {
      return "lose";
    }
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function updateScore() {
  const score = `Player: ${playerScore} - Computer: ${computerScore}`;
  const scoreElement = document.createElement("p");
  scoreElement.textContent = score;
  results.appendChild(scoreElement);
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
