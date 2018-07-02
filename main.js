// var userChoice = prompt('Would you like to play rock, paper or scissors?')
var compScore = 1;
var playerScore = 1;
var computerMove = Math.random();

function winCondition() {
  if (compScore == 5) {
  }
}

if (computerMove <0.33) {
  computerMove = "rock";
} else if(computerMove <= 0.66) {
  computerMove = "paper";
} else {
  computerMove = "scissors";
}

var UserInput = prompt('Your input');

alert("computer result: " + computerMove);



var compare = function(choice1, choice2) {
  if (choice1 == choice2) {
    alert("tie! No points to Both");
  } else if (choice1 == "rock") {
    if (choice2 == "paper") {
      compScore += 1
      alert("You lose, Comp Wins! paper beats rock");
    } else {
      alert("Comp loses! rock wins against Scissors!");
    }
  } else if (choice1 == "paper") {
    if (choice2 == "rock") {
      alert("You win! paper wins");
    } else {
      compScore +=1
      alert("Comp Wins! scissors wins");
    }
  } else if (choice1 == "scissors") {
    if (choice2 == "rock") {
      compScore += 1
      alert("You lose! rock is the winner!");
    } else {
      alert("You won! scissors is the winner");
    }
  }
}

compare(UserInput, computerMove);
