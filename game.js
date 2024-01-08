let playerCount = 0;
let computerCount = 0;
let drawCount = 0;
let playcount = 0;
let comptcount = 0;
let drawcount = 0;
let playArray = [0,0,0];

function resetCounters()
{
 playerCount = 0;
 computerCount = 0;
 drawCount = 0;
 playcount = 0;
 comptcount = 0;
 drawcount = 0;
 playArray = [0,0,0];
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
const PlayerScore = document.getElementById('playerScore');
const ComputerScore = document.getElementById('computerScore');
const BothPicks = document.getElementById('bothPicks');
const ResultInfo = document.getElementById('resultInfo');

Rock.addEventListener("click", () => {handleSelections('rock');});
Paper.addEventListener("click", () => {handleSelections('paper');});
Scissors.addEventListener("click", () => {handleSelections('scissors'); });

function handleSelections(player) {

    if(playcount == 5 || comptcount == 5)
    {
        gameOver();
    }

    compt = getComputerChoice();
    playArray = playRound(player,compt);
    playcount =+playArray[0];
    comptcount =+playArray[1];
    drawcount =+playArray[2];
    updateScoreLabels(playcount,comptcount);
}

function updateScoreLabels(playerScore, computerScore)
{
    PlayerScore.textContent = `Player: ${playerScore}`;
    ComputerScore.textContent = `Computer: ${computerScore}`; 
}

function playRound(playerSelection, ComputerSelection){

    if(playerSelection == ComputerSelection)
    {
        BothPicks.textContent = `Player chose ${playerSelection} and computer chose ${ComputerSelection}\n`;
        ResultInfo.textContent = "It's a tie, let's go again!";
        drawCount++;
    }

    else{
        if ((playerSelection == "rock" && ComputerSelection == "paper")||
            (playerSelection == "paper" && ComputerSelection == "scissors") ||
            (playerSelection == "scissors" && ComputerSelection == "rock"))
        {
            BothPicks.textContent = `Player chose ${playerSelection} and computer chose ${ComputerSelection}\n`;
            ResultInfo.textContent = "Computer wins this round!";
            computerCount++;
        }
        
        else if ((playerSelection == "rock" && ComputerSelection == "scissors")||
        (playerSelection == "paper" && ComputerSelection == "rock")||
        (playerSelection == "scissors" && ComputerSelection == "paper"))
        {
            BothPicks.textContent = `Player chose ${playerSelection} and computer chose ${ComputerSelection}\n`;
            ResultInfo.textContent = "Player wins this round!";
            playerCount++;
    }

    return [playerCount,computerCount,drawCount];
    }
}

function gameOver(){ 

    return playcount > comptcount ? (endgameMsg.textContent = 'You won!') : (endgameMsg.textContent = 'You lost...');    
}