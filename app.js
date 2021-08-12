// function computerPlay() {
//     var choices = ["rock" , "paper" , "scissors"];
//     var choice = choices[Math.floor(Math.random() * 3)];
//     return choice;
// }

// function playRound(playerSelection , computerSelection) {
//     playerSelection.toLowerCase();
//     var result = '';
//     if(playerSelection === computerSelection){
//         result = 'Draw'
//     }
//     else if(playerSelection === "rock" && computerSelection === "paper"){
//         result = "You Lose!";
//     }
//     else if(playerSelection === "paper" && computerSelection === "scissors"){
//         result = "You Lose!";
//     }
//     else if(playerSelection === "scissors" && computerSelection === "rock"){
//         result = "You Lose!";
//     }
//     else {
//         result = "You Win!";
//     }
//     return result;
// }

// function game() {
//     let player = 0 , computer = 0;
//     while(true) {
//         let playerSelection = prompt("Enter your choice :");
//         let computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//         if(playRound(playerSelection , computerSelection) === "You Win!") {
//             player++;
//         }
//         else if(playRound(playerSelection , computerSelection) === "You Lose!"){
//             computer++;
//         }
//         console.log("Your Score: " + player + " " + "Computer's Score: " + computer);
//         if(player == 5 || computer == 5) break;
//     }
//     if(player > computer) return "Winner Winner Chicken Dinner!";
//     return "Better Luck Next Time!";
// }

// console.log(game());

console.log("Hello World!");

let scorePlayer=0, scoreComputer=0;
let gameState=0; // 0=No winner, 1=Someone Won

const buttons = document.querySelectorAll("button");
console.log(buttons);
const scoreboard = document.querySelector(".scoreboard");
console.log(scoreboard);
const computer = document.querySelector("#computer");
const player = document.querySelector("#player");
const display = document.querySelector(".display");
const main = document.querySelector(".main");
const reset = document.createElement("button");
reset.setAttribute("id", "reset");
reset.style.cssText = 'color: #e63946; background-color: #a8dadc; margin-top: 1em;';
reset.textContent = "RESET";
main.appendChild(reset);
document.getElementById("reset").disabled = true;

function computerPlay()
{
    let choices = ['rock', 'paper', 'scissors'];
    let computer = choices[Math.floor(Math.random()*3)];
    return computer;
}

function play(player, computer)
{
    // 0=Tie, 1=Player, 2=Computer
    if(player === computer) {
        return 0;
    }
    else if(player === 'rock' && computer === 'scissors') {
        return 1;
    }
    else if(player === 'paper' && computer === 'rock') {
        return 1;
    }
    else if(player === 'scissors' && computer === 'paper') {
        return 1;
    }
    else {
        return 2;
    }
}

function game(id) 
{
    if(gameState === 1) return;
    let choices = ['rock', 'paper', 'scissors'];  
    let playerChoice = choices[parseInt(id)];
    let computerChoice = computerPlay();
    let result = play(playerChoice, computerChoice);
    console.log(result);
    if(result === 1) {
        scorePlayer++;
        player.textContent = scorePlayer;
    }
    else if(result == 2) {
        scoreComputer++;
        computer.textContent = scoreComputer;
    }
    display.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}.`;
    if(scorePlayer === 5 || scoreComputer === 5) {
        gameState = 1;
        const result = document.createElement('div');
        if(scorePlayer === 5) {
            result.textContent = "Congrats! You won the game";
        }
        else if(scoreComputer === 5) {
            result.textContent = "Computer overpowered you, better luck next time!";
        }
        else {
            result.textContent = "It's a draw!";
        }
        document.getElementById("reset").disabled = false;
        result.setAttribute("id", "result");
        scoreboard.appendChild(result);
    }
}

function resetGame() {
    scorePlayer = 0;
    scoreComputer = 0;
    gameState = 0;
    player.textContent = scorePlayer;
    computer.textContent = scoreComputer;
    let garbage = scoreboard.removeChild(document.getElementById("result"));
    display.textContent = "";
    document.getElementById("reset").disabled = true;
}

const btn = document.querySelector("#reset");
btn.addEventListener('click', () => {
    resetGame();
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});