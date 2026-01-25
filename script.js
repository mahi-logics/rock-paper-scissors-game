function rock() {

    /*
    'Math.random()' returns a random decimal number between 0 (inclusive) and 1 (exclusive).

            0 ≤ x < 1
    */

    const randomNumber = Math.random();
    
    let computer;
    let result;

    if(randomNumber < 1/3){
        computer = 'rock';
    } else if(randomNumber === 1/3 || randomNumber < 2/3){
        computer = 'paper';
    } else{
        computer = 'scissors';
    }
    
    switch (computer) {
        case 'rock':
            result = "Tie.";
            break;
        case 'paper':
            result = "You lost!";
            break;
        case 'scissors':
            result = "You won.";
            break;
    };

    alert(`You picked rock. Computer picked ${computer}. ${result}`);
};

function paper() {
    const randomNumber = Math.random();
    
    let computer;
    let result;

    if(randomNumber < 1/3){
        computer = 'rock';
    } else if(randomNumber === 1/3 || randomNumber < 2/3){
        computer = 'paper';
    } else{
        computer = 'scissors';
    }
    
    switch (computer) {
        case 'rock':
            result = "You won.";
            break;
        case 'paper':
            result = "Tie.";
            break;
        case 'scissors':
            result = "You lost!";
            break;
    };

    alert(`You picked paper. Computer picked ${computer}. ${result}`);
};

function scissors() {
    const randomNumber = Math.random();
    
    let computer;
    let result;

    if(randomNumber < 1/3){
        computer = 'rock';
    } else if(randomNumber === 1/3 || randomNumber < 2/3){
        computer = 'paper';
    } else{
        computer = 'scissors';
    }
    
    switch (computer) {
        case 'rock':
            result = "You lost!";
            break;
        case 'paper':
            result = "You won.";
            break;
        case 'scissors':
            result = "Tie.";
            break;
    };

    alert(`You picked scissors. Computer picked ${computer}. ${result}`);
};