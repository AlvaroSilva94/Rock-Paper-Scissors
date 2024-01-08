let playerCount = 0;
let computerCount = 0;
let drawCount = 0;
let playcount = 0;
let comptcount = 0;
let drawcount = 0;
let playArray = 0;

function resetCounters()
{
 playerCount = 0;
 computerCount = 0;
 drawCount = 0;
 playcount = 0;
 comptcount = 0;
 drawcount = 0;
 playArray = 0;
}

function getComputerChoice() {

    const possible = ['rock', 'paper', 'scissors'];
    const selection = Math.floor(Math.random()*possible.length);
    var randomChoice = possible[selection];
    return randomChoice;
}

const Rock = document.getElementById('playRock');
const Paper = document.getElementById('playPaper');
const Scissors = document.getElementById('playScissors');

Rock.addEventListener("click", () => {handleSelections('rock');});
Paper.addEventListener("click", () => {handleSelections('paper');});
Scissors.addEventListener("click", () => {handleSelections('scissors'); });

function handleSelections(player) {
    compt = getComputerChoice();
    playArray = playRound(player,compt);
    playcount =+playArray[0];
    comptcount =+playArray[1];
    drawcount =+playArray[2];
    game();
}

function playRound(playerSelection, ComputerSelection){

    if(playerSelection == ComputerSelection)
    {
        console.log(`Player chose ${playerSelection} and computer chose ${ComputerSelection}\n`);
        console.log("It's a tie, let's go again!")
        drawCount++;
    }

    else{
        if (playerSelection == "rock" && ComputerSelection == "paper")
        {
            console.log(`Player chose ${playerSelection} and computer chose ${ComputerSelection}\n`);
            console.log("Computer wins!");
            computerCount++;
        }
        else if (playerSelection == "paper" && ComputerSelection == "scissors")
        {
            console.log(`Player chose ${playerSelection} and computer chose ${ComputerSelection}\n`);
            console.log("Computer wins!");
            computerCount++;
        }
        else if (playerSelection == "scissors" && ComputerSelection == "rock")
        {
            console.log(`Player chose ${playerSelection} and computer chose ${ComputerSelection}\n`);
            console.log("Computer wins!");
            computerCount++;
        }
        else if (playerSelection == "rock" && ComputerSelection == "scissors")
        {
            console.log(`Player chose ${playerSelection} and computer chose ${ComputerSelection}\n`);
            console.log("Player wins!");
            playerCount++;
        }
        else if (playerSelection == "paper" && ComputerSelection == "rock")
        {
            console.log(`Player chose ${playerSelection} and computer chose ${ComputerSelection}\n`);
            console.log("Player wins!");
            playerCount++;
        }
        else if (playerSelection == "scissors" && ComputerSelection == "paper")
        {
            console.log(`Player chose ${playerSelection} and computer chose ${ComputerSelection}\n`);
            console.log("Player wins!");
            playerCount++;
        }
    }

    return [playerCount,computerCount,drawCount];
}

function game(){ 

    console.log(`Player won ${playcount} times`);
    console.log(`Computer won ${comptcount} times\n`);
    console.log(`There was a draw ${drawcount} times`)

}

//resetCounters();
//game();