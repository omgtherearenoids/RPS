
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

function getPlayerChoice(choice,playerScore,computerScore){

    let playerChoice = choice; 
    let comp = getComputerChoice();
    let winVal = getResult(playerChoice,comp);

    if(winVal == 1){
        const result = document.querySelector('#result');
        result.textContent = "You won that Round!!";
        updateResult(1);
    }else if(winVal == 2){
        const result = document.querySelector('#result');
        result.textContent = "You lost that Round!";
        updateResult(2);
    }else{
        const result = document.querySelector('#result');
        result.textContent = "tie!";
        updateResult(3);
    }

    

}

let playerScore = 0;
let computerScore = 0;
let roundTrack = 0;

function updateResult(winBool){

    
    
    roundTrack++;
    const player = document.querySelector('#player');
    const computer = document.querySelector('#comp');
    const round = document.querySelector('#round');

    if(winBool==1){
        playerScore++;
        player.textContent = "PLAYER SCORE: "+playerScore;
        console.log(playerScore);
    }else if(winBool==2){
        computerScore++;
        computer.textContent = "COMPUTER SCORE: "+computerScore;
        console.log(computerScore);
    }
    
    round.textContent = "ROUND "+roundTrack;

    if(playerScore==5 ){
        alert("YOU WON AGAINST THE COMPUTER!!");
    }else if(computerScore==5){
        alert("YOU LOST AGAINST THE COMPUTER!!");
    }

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      getPlayerChoice(button.className,playerScore,computerScore);
    });
  });


//console.log(game())



