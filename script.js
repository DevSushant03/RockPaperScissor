let userScore = 0;
let roboScore = 0;

// get user choice

function getuserchoice() {
  let userChoiceInput = document.querySelector('input[name="radio"]:checked');
  let userChoice = userChoiceInput ? userChoiceInput.value.toUpperCase() : "PAPER";
  return userChoice;
}

//get computer choice
function getrobochoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let roboChoice = choices[Math.floor(Math.random() * 3)];
  return roboChoice;
}

let robot = document.getElementsByClassName("robot")[0]; // Get the robot element
let user = document.getElementsByClassName("user")[0]; // Get the user element

//score element access
let userScoreElement = document.getElementById("userScore");
let roboScoreElement = document.getElementById("roboScore");

function playGame() {
  let userChoice = getuserchoice();
  let roboChoice = getrobochoice();
  // Determine the winner
  let result = "";


  
  if (userChoice === roboChoice) {
    result = "It's a tie!";
    robot.style.filter = "drop-shadow(2px 2px 30px #888)";
    user.style.filter = "drop-shadow(2px 2px 30px #888)";
  } else if (
    (userChoice === "ROCK" && roboChoice === "SCISSORS") ||
    (userChoice === "PAPER" && roboChoice === "ROCK") ||
    (userChoice === "SCISSORS" && roboChoice === "PAPER")
  ) {
    result = "You win!";
    user.style.filter = "drop-shadow(2px 2px 30px #00ff04)";
    robot.style.filter = "drop-shadow(2px 2px 30px #ff0000)";
    document.getElementById("result").style.color = "green";
    userScore++;
  } else {
    result = "You lose!";
    user.style.filter = "drop-shadow(2px 2px 30px #ff0000)";
    robot.style.filter = "drop-shadow(2px 2px 30px #00ff04)";
    document.getElementById("result").style.color = "red";
    roboScore++;
   
  }
  userScoreElement.innerHTML = userScore
  roboScoreElement.innerHTML = roboScore;
  document.getElementById("result").innerHTML = result;
}
