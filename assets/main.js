const win = 'You won!';
const lose = 'You lost!';

const playerResults = document.querySelector('.player').querySelector('p').querySelector('span')
const opponentResults = document.querySelector('.opponent').querySelector('p').querySelector('span')
const roundresults = document.querySelector('h2');
const bodyBackground = document.querySelector('body');
const replayBtn = document.querySelector('.play-again-btn');

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

let nbrWin = 0;
let nbrLost = 0;

function initiateGameStats() {
    // initiating DOM content
    roundresults.innerText = "Welcome! choose: Rock, Paper or Scissors"
    playerResults.innerText = " " + nbrWin + " / 5";
    opponentResults.innerText = " " + nbrLost + " / 5";
    replayBtn.style.display = "none";
}
initiateGameStats();
// game Evevent listeners for buttons

function game() {
        rockBtn.addEventListener('click', () => {
                const computerSelection = getComputerChoice();
                playerSelection = 'rock';
                oneRound(playerSelection, computerSelection);
                endGame();

        });
        paperBtn.addEventListener('click', () => {
                 const computerSelection = getComputerChoice();
                 playerSelection = 'paper';
                 oneRound(playerSelection, computerSelection);
                 endGame();
        });
        scissorsBtn.addEventListener('click', () => {
                const computerSelection = getComputerChoice();
                playerSelection = 'scissors';
                oneRound(playerSelection, computerSelection);
                endGame();
        });
};


function endGame() {

    if (nbrLost >= 5 || nbrWin >= 5) {
        rockBtn.classList.add("btns-game-end");
        paperBtn.classList.add("btns-game-end");
        scissorsBtn.classList.add("btns-game-end");
        replayBtn.style.display = "";
        replayBtn.addEventListener('click', () => {
            
            replayBtn.style.display = "none";
            rockBtn.classList.remove("btns-game-end");
            paperBtn.classList.remove("btns-game-end");
            scissorsBtn.classList.remove("btns-game-end");
            nbrLost = 0;
            nbrWin = 0;
            roundresults.style.color = "black";
            roundresults.style.fontSize = "1.5rem";
            roundresults.innerText = "Welcome again! choose: Rock, Paper or Scissors";
            bodyBackground.style.backgroundColor = "beige";
            playerResults.innerText = " " + nbrWin + " / 5";
            opponentResults.innerText = " " + nbrLost + " / 5";
            rockBtn.disabled = false;
            paperBtn.disabled = false;
            scissorsBtn.disabled = false;
            
        });
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        
        if (nbrLost <= nbrWin) {
            roundresults.innerText = "Congrats you won the Game!";
            roundresults.style.color = "white";
            roundresults.style.fontSize = "2rem";
            bodyBackground.style.backgroundColor = "green";
        }
        else if (nbrLost >= nbrWin) {
            roundresults.innerText = "Oops! you lost the Game!";
            roundresults.style.color = "white";
            roundresults.style.fontSize = "2rem";
            bodyBackground.style.backgroundColor = "red";
        }
    }
};


// getting the opponent's random choice
function getComputerChoice(){
    const rockPaperScissors = ['rock', 'paper', 'scissors'],
          randomNumber = Math.floor(Math.random() * rockPaperScissors.length),
          opponentMove = rockPaperScissors[randomNumber];

    return opponentMove;
};

// play one round logic with DOM content upddated 
function oneRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {

        roundresults.innerText = 'Draw, you bouth selected ' + playerSelection;

    }
        else if ((playerSelection === 'rock' && computerSelection ==='paper') ||
                (playerSelection === 'paper' && computerSelection ==='scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'rock')) {
                    nbrLost++;
                    opponentResults.innerText = " " + nbrLost + " / 5";

                    roundresults.innerText = lose + " " + computerSelection + ' beats ' + playerSelection;
    } else if ((playerSelection === 'paper' && computerSelection ==='rock') ||
               (playerSelection === 'scissors' && computerSelection ==='paper') ||
               (playerSelection === 'rock' && computerSelection === 'scissors')) {
                nbrWin++;
                playerResults.innerText = " " + nbrWin +  " / 5";
                roundresults.innerText = win + " " + playerSelection + ' beats ' + computerSelection;
    }

};

game();

// function game() {
//    for (let i =0; i < 5;i++) {
//        let playerSelection = '';
//        playerSelection = prompt('rock, Paper or Scissors');
//        const computerSelection = getComputerChoice();
//        console.log(oneRound(playerSelection, computerSelection));
//    }
//     console.log(nbrLost);
//     console.log(nbrWin);
//     if (nbrWin === nbrLost) {
//         console.log('Draw!');

//     } else if (nbrWin > nbrLost) {
//         console.log('you won!!!!');
//     } else {
//         console.log('You Lost the game!');
//     }

// };
// game();
