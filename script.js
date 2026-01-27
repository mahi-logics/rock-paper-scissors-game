let score = JSON.parse(localStorage.getItem('scoreData')) || {
        win: 0,
        lose: 0,
        tie: 0
};
    

updateScore();

// if (!score) {
//     score = {
//         win: 0,
//         lose: 0,
//         tie: 0
//     }
// }

function reset() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;

    // localStorage.setItem('scoreData', JSON.stringify(score));

    localStorage.removeItem('scoreData');

    updateScore();

}


function player(playerMove) {
    const computer = computerMove();
    let result = '';
    
    if (playerMove === 'rock') {
        switch (computer) {
            case 'rock':
                result = "Tie.";
                score.tie++;
                break;
            case 'paper':
                result = "You lost!";
                score.lose++;
                break;
            case 'scissors':
                result = "You won.";
                score.win++;
                break;
        };

    } else if (playerMove === 'paper') {

        switch (computer) {
            case 'rock':
                result = "You won.";
                score.win++;
                break;
            case 'paper':
                result = "Tie.";
                score.tie++;
                break;
            case 'scissors':
                result = "You lost!";
                score.lose++;
                break;
        };
        
    } else {
        switch (computer) {
            case 'rock':
                result = "You lost!";
                score.lose++;
                break;
            case 'paper':
                result = "You won.";
                score.win++;
                break;
            case 'scissors':
                result = "Tie.";
                score.tie++;
                break;
        };
    }


    localStorage.setItem('scoreData', JSON.stringify(score));

    
    // alert(`You picked ${playerMove}. Computer picked ${computer}. ${result} \n Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`);
    
    document.querySelector('.js-result').innerHTML = result;
    
    document.querySelector('.js-details').innerHTML = `You ${playerMove} - ${computer} Computer`;

    updateScore();
};

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}



function computerMove() {
    
    /*
    'Math.random()' returns a random decimal number between 0 (inclusive) and 1 (exclusive).

            0 ≤ x < 1
    */
    
    let computer = '';

    const randomNumber = Math.random();
    
    if(randomNumber < 1/3){
        computer = 'rock';
    } else if(randomNumber === 1/3 || randomNumber < 2/3){
        computer = 'paper';
    } else{
        computer = 'scissors';
    };

    return computer;
    
}
