let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    switch (letter) {
        case 'r':
            return "Rock";
        case 'p':
            return "Paper";
        default:
            return "Scissors";
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerText = userScore;
    compScore_span.innerText = compScore;
    result_p.innerText = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp). You win!`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 350);
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerText = userScore;
    compScore_span.innerText = compScore;
    result_p.innerText = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp). You lose!`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 350);
}

function draw(userChoice, computerChoice) {
    result_p.innerText = "It's a draw!"
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('grey-glow');
    }, 350);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs': 
            win(userChoice, computerChoice);
            break;

        case 'sp':
            win(userChoice, computerChoice);
            break;

        case 'pr': 
            win(userChoice, computerChoice);
            break;
        
        case 'rp':
            lose(userChoice, computerChoice);
            break;

        case 'ps':
            lose(userChoice, computerChoice);
            break;

        case 'sr':
            lose(userChoice, computerChoice);
            break;
        
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    });

    paper_div.addEventListener('click', function() {
        game('p');
    });

    scissors_div.addEventListener('click', function() {
        game('s');
    });
}

main();