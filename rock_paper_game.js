


function getComputerChoice(){
    var computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0){
        return "rock";
    }
    else if(computerChoice === 1){
        return "paper";
    }   
    else{
        return "scissors";
    }
};

function getHumanChoice(){
    return prompt("Choose Rock, Paper, Scissors ").toLowerCase();
};

function playRound(humanChoice, computerChoice){
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock!");
        return "computer";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors!");
        return "human";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win! Paper beats Rock!");
        return "human";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper!");
        return "computer";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors!");
        return "computer";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You Win! Scissors0 beats Paper!");
        return "human";
    }
    else 
        console.log("Play again!")
    

}

function playGame(){
    let humanScore = 0;
    let computerScore = 0 ;

    for ( let i=0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let result = playRound(humanChoice, computerChoice);
        if (result =="human"){
            humanScore++;
        }
        else if (result =="computer"){
            computerScore++;
        }
    console.log(`The Winner of this round is: ${result}`);
    } 

    if (humanScore > computerScore){
        console.log("Congratulation you win the game");
    }
    else if ( humanScore < computerScore){
        console.log("Sorry you lose the game");
    }
    else{
        console.log("It's a tie, try again");
    }
    
}

playGame();