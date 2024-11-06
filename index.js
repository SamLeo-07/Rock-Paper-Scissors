let greet = alert("Welcome to Rock Paper Scissors!");

let playerScore = 0;
let computerScore = 0

function randomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 3;


function getComputersChoice(){
  let computer = randomInt(min, max);
  switch (computer){
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
  }
}

function getPlayerChoice(){
  const play = prompt("rock, paper, or scissors?");
  return play;
}


function playRound(){
  const compChoice = getComputersChoice();
  const player = getPlayerChoice();
  if (compChoice === player) {
    console.log("it's a tie!" + " " + "Computer chose " + compChoice + " " + "and you chose " + player);
    return  "tie";
  }  else if (
     (compChoice === "rock" && player === "paper") ||
  (compChoice === "paper" && player === "scissors") || (compChoice === "scissors" && player === "rock")) { console.log("you win!" + " you choose " + player + " " + "Computer chose " + compChoice); 
  return "player";
}  else {
  console.log("you lose!" + " " + "you choose " + player + " " + "Computer chose " + compChoice);
  return "computer";
}
}


function playGame(){
  
let times = 5;
for(let i = 0; i < times; i++){
    let roundResult = playRound();
    if (roundResult === "player") {
      playerScore++;
    } else if (roundResult === "computer") {
      computerScore++;
    } else if (roundResult === "tie") { 
    i--; 
    }
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);

  if (playerScore === 3) {
    console.log("You win the game!");
    break;
  } else if (computerScore === 3){
    console.log("You lose the game!");
    break;
  }
}
}
playGame();
