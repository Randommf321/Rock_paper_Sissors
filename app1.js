// Define variables
var player = document.querySelector('.player');
var computer = document.querySelector('.computer');
var winner = document.querySelector('.winner');
var pPoint = document.querySelector('.pPoint');
var cPoint = document.querySelector('.cPoint');
var pCount = 0;
var cCount = 0;

// Action
function play(playerChoice) {
    player.innerText = "Player choice: " + playerChoice;
    var random = Math.floor(Math.random() * 3);
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[random];
    computer.innerText = "Computer choice: " + computerChoice;
    
    if ((playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")) {
        winner.innerText = "Winner: player";
        pPoint.innerText = "Player: " + (++pCount);
    } else if(playerChoice == computerChoice) {
        winner.innerText = "Winner: tie";
    } else {
        winner.innerText = "Winner: computer";
        cPoint.innerText = "Computer: " + (++cCount);
    }
}
function restart() {
    pCount = 0;
    cCount = 0;
    pPoint.innerText = "Player: 0";
    cPoint.innerText = "Computer: 0";
    winner.innerText = "Winner:";
    player.innerText = "Player choice:";
    computer.innerText = "Computer choice:";
}
