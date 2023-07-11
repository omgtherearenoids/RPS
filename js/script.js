
function getComputerChoice(){

    const rps = Math.floor(Math.random()*3)+1;

    if(rps==1){
        return "Rock";
    }else if(rps==2){
        return "Paper";
    }else{
        return "Scissors";
    }

}

function getResult(playerSelection1,computerSelection){

    const playerSelection = playerSelection1.toLowerCase();

    if(playerSelection=="rock" && computerSelection =="Rock"){
        console.log("TIE!")
        return 3;
    }else if(playerSelection=="rock" && computerSelection =="Paper"){
        console.log("You lose! Paper beats Rock")
        return 2;
    }else if(playerSelection=="rock" && computerSelection =="Scissors"){

        console.log("You WIN! Rock beats Scissors")
        return 1;

    }
    else if(playerSelection=="paper" && computerSelection =="Paper"){
        console.log("TIE!")
        return 3;
    }else if(playerSelection=="paper" && computerSelection =="Scissors"){
        console.log("You lose! Scissors beats Paper")
        return 2;
    }else if(playerSelection=="paper" && computerSelection =="Rock"){
        console.log("You WIN! Paper beats Rock")
        return 1;
    }
    else if(playerSelection=="scissors" && computerSelection =="Paper"){
        console.log("You WIN! Scissors beats Paper!")
        return 1;
    }else if(playerSelection=="scissors" && computerSelection =="Scissors"){
        console.log("TIE!")
        return 3;
    }else if(playerSelection=="scissors" && computerSelection =="Rock"){
        
        console.log("You lose! Rock beats Scissors")
        return 2;

    }else{
        return "ERROR"
    }

}

function game(){

    let playerScore = 0;
    let computerScore = 0;


    while(playerScore!=5 && computerScore!=5){

        let playerChoice = prompt("ROCK, PAPER, or SCISSORS?!");
        let comp = getComputerChoice();

        let winVal = getResult(playerChoice,comp);

        if(winVal == 1){
            playerScore++;
        }else if(winVal == 2){
            computerScore++;
        }else{
            continue;
        }
    }

    if(playerScore==5){
        return "PLAYER WINS!";
    }else{
        return "COMPUTER WINS!!!";
    }


}


console.log(game())



