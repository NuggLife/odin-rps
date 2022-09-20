/*const compchoice = getComputerChoice();
const playchoice = getPlayerChoice();*/
let playerwins = 0
let computerwins = 0

function getComputerChoice() {
    let choicenum = Math.floor(Math.random() * 3) + 1;
    console.log(choicenum);
    if (choicenum === 1) {
        x = "rock"
    }
    else if (choicenum === 2) {
        x = "paper"
    }
    else {
        x = "scissors"
    }
return x
}

function getPlayerChoice() {
    let playchoice = prompt("Well, will it be rock, paper, or scissors?", "").toLowerCase();
return playchoice
}

function playRound() {
    let playchoice = getPlayerChoice();
    let compchoice = getComputerChoice();
    if (playchoice === compchoice) {
        result = "Tie!"
        computerwins++, playerwins++
    } else if (playchoice === "rock" && compchoice === "paper") {
        result = "Paper beats Rock, sorry for your loss!"
        computerwins++
    } else if (playchoice === "rock" && compchoice === "scissors") {
        result = "Rock beats Scissors, good win!"
        playerwins++
    } else if (playchoice === "paper" && compchoice === "rock") {
        result = "Paper beats Rock, good win!"
        playerwins++
    } else if (playchoice === "paper" && compchoice === "scissors") {
        result = "Scissors beat Paper, sorry for your loss!"
        computerwins++
    } else if (playchoice === "scissors" && compchoice === "rock") {
        result = "Rock beats Scissors, sorry for your loss!"
        computerwins++
    } else if (playchoice === "scissors" && compchoice === "paper") {
        result = "Scissors beat Paper, good win!"
        playerwins++
    } else {
        result = "You must have picked something other than rock, paper, or scissors"
    }
    console.log(result);
return result  
}

function game() {
    for (let i = 0; i < 10; i++) {
    playRound();
    if (playerwins == 5) {
        return "winner"
    } else if (computerwins == 5) {
        return "loser"
    }
    }
}
/*console.log(compchoice);
console.log(playchoice);*/
/*console.log(playRound());
console.log(playRound());*/
console.log(game());
console.log(playerwins);
console.log(computerwins);
