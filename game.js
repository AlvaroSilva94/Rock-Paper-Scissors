let playerCount;
let computerCount;
let drawCount;
let playcount;
let comptcount;
let drawcount;
let playArray;

function resetCounters() {
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

function getPlayerChoice() {

    const playerSelection = prompt("Please enter an option (rock/paper/scissors): ").toLowerCase();
    return playerSelection;
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

    for(i=1;i<6;i++)
    {
        player = getPlayerChoice();
        compt = getComputerChoice();
        playArray = playRound(player,compt);
        playcount =+playArray[0];
        comptcount =+playArray[1];
        drawcount =+playArray[2];
    }
    console.log(`Player won ${playcount} times`);
    console.log(`Computer won ${comptcount} times\n`);
    console.log(`There was a draw ${drawcount} times`)

    if(playcount > comptcount)
    {
        console.log("Player is the absolute Winner!");
    }
    else if (comptcount > playcount)
    {
        console.log("Computer is the absolute Winner!");
    }
    else
    {
        console.log("It's a tie! Nobody won since both player and computer won the same amount of games!")
    }
}

resetCounters();
game();