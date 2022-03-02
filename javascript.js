
let weaponArray = ["rock", "paper", "scissors"];
let playerWinCount = 0;
let computerWinCount = 0;

let winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper;'
    }

function computerPlay(){
    return weaponArray[Math.floor(Math.random() * weaponArray.length)];
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        return "Draw! No winner this round...";
    }
    else if(winConditions[playerSelection] === computerSelection){
        playerWinCount++;
        return `Player wins the round...${playerSelection} beats ${computerSelection}!`;
    }
    else{
        computerWinCount++;
        return `Computer wins the round...${computerSelection} beats ${playerSelection}!`;
    }
}

function declareWinner(playerWinCount, computerWinCount){

    if(playerWinCount > computerWinCount){
        return "Player scored five points! Player won!";
    }
    else if (computerWinCount > playerWinCount){
        return "Computer scored five points! What a sad day for mankind :(";
    }
    else{
        return "It is a draw! But really Skynet is the real winner.";
    }
}

function game(){
    const buttons = document.querySelectorAll('button');
    const para = document.querySelector('#round-winner');
    const playerScorePara = document.querySelector('#player-score');
    const computerScorePara = document.querySelector('#computer-score');
    const displayPlayerWeapon = document.querySelector('#player-weapon');
    const displayComputerWeapon = document.querySelector('#computer-weapon');
    const winnerPara = document.querySelector('#final-message');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(playerWinCount === 0){
                winnerPara.textContent = "";
            }

            let playerSelection = button.id;
            let computerSelection = computerPlay();

            para.textContent = playRound(playerSelection, computerSelection);
            playerScorePara.textContent = `Player: ${playerWinCount}`;
            computerScorePara.textContent = `Computer: ${computerWinCount}`;
            displayPlayerWeapon.textContent = `Player chose: ${playerSelection}`;
            displayComputerWeapon.textContent = `Computer chose: ${computerSelection}`;

            if(playerWinCount === 5 || computerWinCount === 5){
                winnerPara.textContent = declareWinner(playerWinCount, computerWinCount);
                playerWinCount = 0;
                computerWinCount = 0;
            }
        });
    });
}

game();
