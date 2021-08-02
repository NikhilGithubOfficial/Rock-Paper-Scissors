function computerPlay() {
    var choices = ["rock" , "paper" , "scissors"];
    var choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerSelection , computerSelection) {
    playerSelection.toLowerCase();
    var result = '';
    if(playerSelection === computerSelection){
        result = 'Draw'
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        result = "You Lose!";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        result = "You Lose!";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        result = "You Lose!";
    }
    else {
        result = "You Win!";
    }
    return result;
}

function game() {
    let player = 0 , computer = 0;
    while(true) {
        let playerSelection = prompt("Enter your choice :");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if(playRound(playerSelection , computerSelection) === "You Win!") {
            player++;
        }
        else if(playRound(playerSelection , computerSelection) === "You Lose!"){
            computer++;
        }
        console.log("Your Score: " + player + " " + "Computer's Score: " + computer);
        if(player == 5 || computer == 5) break;
    }
    if(player > computer) return "Winner Winner Chicken Dinner!";
    return "Better Luck Next Time!";
}

console.log(game());