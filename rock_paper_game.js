let humanScore = 0;
let computerScore = 0;

const choicesDiv = document.querySelector("#choices");

const scoreBoard = document.querySelector("#score");

const winnerBoard = document.querySelector("#winner");

const resultsDiv = document.querySelector("#results");

const reset = document.querySelector("#play-again");


function getComputerChoice(){
    var computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0){
        return "rock";
    }
    else if(computerChoice === 1){
        return "paper";
    }       
    else{
        return "scissor";
    }
};

function getHumanChoice(){
    return prompt("Choose Rock, Paper, Scissor ").toLowerCase();
};

function playRound(humanChoice, computerChoice){
    choicesDiv.innerHTML = "";
    resultsDiv.innerHTML = "";

    const userChoice = document.createElement("p");
    userChoice.textContent = `You chose: ${humanChoice}`
    const compChoice =document.createElement("p");
    compChoice.textContent=`Computer chose: ${computerChoice}`;

    choicesDiv.append(userChoice);
    choicesDiv.append(compChoice);


    //console.log(`You chose: ${humanChoice}`);
    //console.log(`Computer chose: ${computerChoice}`);
    if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        resultsDiv.textContent= "You lose! Paper beats Rock!";
        scoreBoard.textContent = `Player ${humanScore} || Computer ${computerScore}`;
    }
    else if (humanChoice === "rock" && computerChoice === "scissor"){
        humanScore++;
        resultsDiv.textContent= "You win! Rock beats Scissor!";
        scoreBoard.textContent = `Player ${humanScore} || Computer ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        resultsDiv.textContent= "You Win! Paper beats Rock!";
        scoreBoard.textContent = `Player ${humanScore} || Computer ${computerScore}`;
    }
    else if (humanChoice === "paper" && computerChoice === "scissor"){
        computerScore++;
        resultsDiv.textContent= "You lose! Scissor beats Paper!";
        scoreBoard.textContent = `Player ${humanScore} || Computer ${computerScore}`;
    }
    else if (humanChoice === "scissor" && computerChoice === "rock"){
        computerScore++;
        resultsDiv.textContent= "You lose! Rock beats Scissor!";
        scoreBoard.textContent = `Player ${humanScore} || Computer ${computerScore}`;
    }
    else if (humanChoice === "scissor" && computerChoice === "paper"){
        humanScore++;
        resultsDiv.textContent= "You Win! Scissor beats Paper!";
        scoreBoard.textContent = `Player ${humanScore} || Computer ${computerScore}`;
    }
    else 
        resultsDiv.textContent= "Play again!";
    
    if(humanScore === 5 || computerScore ===5){
        const win = humanScore === 5 ? "Congratulations you win!" : "Sorry you lose!";
        winnerBoard.textContent = win; 
        
        btns.forEach(btn => btn.disabled = true);

        reset.style.display = "inline-block";
    };
};

const btns = document.querySelectorAll(".btn")
console.log(btns);

btns.forEach(btn => {btn.addEventListener('click', (event) => {
    const humanChoice = event.target.id;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

});


reset.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;

    scoreBoard.textContent = `Player ${humanScore} || Computer ${computerScore}`;
    winnerBoard.textContent = "";
    resultsDiv.textContent = "";
    choicesDiv.innerHTML = "";

    btns.forEach(btn => btn.disabled = false);
    reset.style.display = "none";
})

