const win = 'You won!';
const lose = 'You lost!';
let nbrWin = 0;
let nbrLost = 0;


function getComputerChoice(){
    const rockPaperScissors = ['rock', 'paper', 'scissors'],
          randomNumber = Math.floor(Math.random() * rockPaperScissors.length),
          opponentMove = rockPaperScissors[randomNumber];

    return opponentMove;
};

function oneRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {

        return 'Draw, you bouth selected ' + playerSelection;
       
    } 
        else if ((playerSelection === 'rock' && computerSelection ==='paper') ||
                (playerSelection === 'paper' && computerSelection ==='scissors') || 
                (playerSelection === 'scissors' && computerSelection === 'rock')) {
                    nbrLost++;
                    return lose + " " + computerSelection + ' beats ' + playerSelection;
    } else if ((playerSelection === 'paper' && computerSelection ==='rock') ||
               (playerSelection === 'scissors' && computerSelection ==='paper') || 
               (playerSelection === 'rock' && computerSelection === 'scissors')) {
                nbrWin++;
                return win + " " + playerSelection + ' beats ' + computerSelection;
    }
};

function game() {
    for (let i =0; i < 3;i++) {
        let playerSelection = '';
        playerSelection = prompt('rock, Paper or Scissors'); 
        const computerSelection = getComputerChoice();
        console.log(oneRound(playerSelection, computerSelection));
    }
    console.log(nbrLost);
    console.log(nbrWin);
    if (nbrWin === nbrLost) {
        console.log('Draw!');

    } else if (nbrWin > nbrLost) {
        console.log('you won!!!!');
    } else {
        console.log('You Lost the game!');
    }

};
game();