function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === "win") {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else if (roundResult === "lose") {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    } else {
      console.log(`It's a tie! You both chose ${playerSelection}.`);
    }
  }

  if (playerScore > computerScore) {
    console.log(
      `Congratulations! You won the game ${playerScore}-${computerScore}.`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `You lost the game ${computerScore}-${playerScore}. Better luck next time!`
    );
  } else {
    console.log(`The game is tied ${playerScore}-${computerScore}.`);
  }
}

function getPlayerSelection() {
  let selection = "";
  while (!["rock", "paper", "scissors"].includes(selection)) {
    selection = prompt("Choose rock, paper, or scissors.").toLowerCase();
  }
  return selection;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
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

/* function getComputerChoice() {
  let choice;
  let result = Math.floor(Math.random() * 3) + 1;
  switch (result) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }
  return choice;
}

function game() {
  let choice = null;
  let answer;
  let playerSelection;
  let computerSelection;
  let playerScore = 0;
  let computerScore = 0;
  let result;

  for (let ctr = 0; ctr < 5; ctr++) {
    while (!choice) {
      answer = prompt("Choose Your Hero! (Rock, Paper, Scissors)");
      if (answer) {
        choice = answer.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
          choice = true;
        }
      }
    }

    playerSelection = choice;
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
      console.log("Draw!");
    } else {
      result = playRound(playerSelection, computerSelection);
      if (playerSelection === result) {
        playerScore += 1;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      } else if (computerSelection === result) {
        computerScore += 1;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      }
    }
    choice = null;
  }
  if (playerScore > computerScore) {
    console.log("You Win, Congratulations!");
  } else if (playerScore < computerScore) {
    console.log("You Lose, Better luck next time!");
  } else {
    console.log("It's a Tie!");
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "paper";
    }
    return "rock";
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "scissors";
    }
    return "paper";
  } else {
    if (computerSelection === "rock") {
      return "rock";
    }
    return "scissors";
  }
}
 */
