let playerwins = 0;
let computerwins = 0;
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
document.getElementById("rock").addEventListener("click", 
    function() { playRound("rock"); });
document.getElementById("paper").addEventListener("click", 
    function() { playRound("paper"); });
document.getElementById("scissors").addEventListener("click", 
    function() { playRound("scissors"); });

function playRound(x) {
    let playchoice = x;
    let compchoice = getComputerChoice();
    if (playchoice === compchoice) {
        result = "Tie!"
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
    document.getElementById("top").textContent = playerwins + ' to ' + computerwins;
    document.getElementById("results").textContent = result;
    winner();
}

function winner() {
    if (playerwins == 5 || computerwins == 5) {
        if (computerwins > playerwins) {
            document.getElementById("results").textContent = "Epic Loss";
        } else {
            document.getElementById("results").textContent = "Big Winner";
        }
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true; 
    }
}
/*console.log(compchoice);
console.log(playchoice);*/
/*console.log(playRound());
console.log(playRound());*/
//console.log(game());
//console.log(playerwins);
//console.log(computerwins);
