console.log("Rock-Paper-Scissors!");

let scorePlayer=0, scoreComputer=0 , scoreTie = 0;
let gameState=0; // 0=No winner, 1=Someone Won

const buttons = document.querySelectorAll("button");
console.log(buttons);
const scoreboard = document.querySelector(".scoreboard");
console.log(scoreboard);
const computer = document.querySelector("#computer");
const player = document.querySelector("#player");
const tie = document.querySelector("#ties");
const display = document.querySelector(".display");
const main = document.querySelector(".main");
const reset = document.createElement("button");
reset.setAttribute("id", "reset");
reset.style.cssText = 'color: #04ecec; background-color: #0b1111; margin-top: 1em;';
reset.textContent = "Play Again";
main.appendChild(reset);
document.getElementById("reset").style.width="120px";
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
    else if(result == 0) {
        scoreTie++;
        tie.textContent = scoreTie;
    }
    display.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}.`;
    if(scorePlayer === 5 || scoreComputer === 5 || scoreTie === 5) {
        gameState = 1;
        const result = document.createElement('div');
        if(scorePlayer === 5) {
            result.textContent = "Congrats! You won!";
        }
        else if(scoreComputer === 5) {
            result.textContent = "Better luck next time!";
        }
        else if(scoreTie === 5) {
            result.textContent = "It's a draw! Rematch?";
        }
        document.getElementById("reset").disabled = false;
        result.setAttribute("id", "result");
        scoreboard.appendChild(result);
    }
}

function resetGame() {
    scorePlayer = 0;
    scoreComputer = 0;
    scoreTie = 0;
    gameState = 0;
    player.textContent = scorePlayer;
    computer.textContent = scoreComputer;
    tie.textContent = scoreTie;
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