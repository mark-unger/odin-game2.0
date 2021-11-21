const messages = ["You can do it!", "Don't give up!", "I'm betting my kid's college fund on you!", "Try rock!", "I said rock, ROCK!"]
const bottom = document.querySelector('.bottom');
let counter = 0
 
let playerWinCount = 0
let computerWinCount = 0



function computerPlay() {
    let computerMove = Math.floor(Math.random() * 3)
    let computerAction
    
    if (computerMove == 1) {
        computerAction = "rock"
    } else if (computerMove == 2) {
        computerAction = "paper"
    } else {
        computerAction = "scissor"
    }

    return computerAction

}

function change() {
    bottom.innerHTML = messages[counter];
    counter ++;
    if (counter >= messages.length) {
        counter = 0;
    }
}


let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
function myFun() {
    let cMove = computerPlay();
    let faceOff = document.querySelector('.faceOff');
    
    if (cMove == "rock") { 
        faceOff.innerHTML = "Rock vs Rock. <br> It's a tie!";
        
        if ((computerWinCount == 0) && (playerWinCount == 0)) {
            let playerBar = document.querySelector('#leftBar')
            playerBar.style.height = '0%';
            let computerBar = document.querySelector('#rightBar')
            computerBar.style.height = '0%'
        }
    } else if (cMove == "paper") {
       
        computerWinCount++
        computerProgress()
        faceOff.innerHTML = "Rock vs Paper. <br> You lost this round!";
        
    } else {
     
        playerWinCount++
        playerProgress()
        faceOff.innerHTML = "Rock vs Scissors. <br> You won this round!";  
    }
    if (playerWinCount == 5 ) {
        
        faceOff.innerHTML = "You won!<br> Choose again to play a new game."
        computerWinCount = 0 
        playerWinCount = 0
    } else if (computerWinCount == 5) {
        
        faceOff.innerHTML = "Oh no... you lost.<br> Choose again to play a new game."
        computerWinCount = 0 
        playerWinCount = 0
    }   
}

function myScissor() {
    let cMove = computerPlay();
    let faceOff = document.querySelector('.faceOff');
    if (cMove == "rock") {
        
        faceOff.innerHTML = ("Scissor vs Rock.<br> You lost this round!");
        computerWinCount++
        computerProgress()
    } else if (cMove == "paper") {
        
        faceOff.innerHTML = "Scissor vs Paper.<br> You won this round!";
        playerWinCount++
        playerProgress()
    } else {
        
        
        faceOff.innerHTML = "Scissor vs Scissors.<br> It's a tie!";
        if ((computerWinCount == 0) && (playerWinCount == 0)) {
            let playerBar = document.querySelector('#leftBar')
            playerBar.style.height = '0%';
            let computerBar = document.querySelector('#rightBar')
            computerBar.style.height = '0%'
        }
    }
    if (playerWinCount == 5 ) {
        
        faceOff.innerHTML = "You won!<br> Choose again to play a new game."
        computerWinCount = 0 
        playerWinCount = 0
    } else if (computerWinCount == 5) {
        
        faceOff.innerHTML = "Oh no... you lost.<br> Choose again to play a new game."
        computerWinCount = 0 
        playerWinCount = 0
    }   
}

function myPaper() {
    let cMove = computerPlay();
    let faceOff = document.querySelector('.faceOff');
    if (cMove == "rock") {
        
        faceOff.innerHTML = "Paper vs Rock.<br> You won this round!";
        playerWinCount++
        playerProgress()
        
    } else if (cMove == "paper") {
        
        faceOff.innerHTML = "Paper vs Paper.<br> It's a tie!";
        if ((computerWinCount == 0) && (playerWinCount == 0)) {
            let playerBar = document.querySelector('#leftBar')
            playerBar.style.height = '0%';
            let computerBar = document.querySelector('#rightBar')
            computerBar.style.height = '0%'
        }
    } else {
        
        computerWinCount++
        computerProgress()
        faceOff.innerHTML = "Paper vs Scissors.<br> You lost this round!";
        
    }
    
    if (playerWinCount == 5 ) {
        
        faceOff.innerHTML = "You won!<br> Choose again to play a new game."
        computerWinCount = 0 
        playerWinCount = 0
    } else if (computerWinCount == 5) {
        
        faceOff.innerHTML = "Oh no... you lost.<br> Choose again to play a new game."
        computerWinCount = 0 
        playerWinCount = 0
    }   
}




function playerProgress() {
    if (computerWinCount == 0) {
        let computerBar = document.querySelector('#rightBar')
        computerBar.style.height = '0%'
    } 
    if (playerWinCount == 1){
        let playerBar = document.querySelector('#leftBar')
        playerBar.style.height = '20%';   
    } else if (playerWinCount == 2){
        let playerBar = document.querySelector('#leftBar')
        playerBar.style.height = '40%';
    }else if (playerWinCount == 3){
        let playerBar = document.querySelector('#leftBar')
        playerBar.style.height = '60%';
    } else if (playerWinCount == 4){
        let playerBar = document.querySelector('#leftBar')
        playerBar.style.height = '80%';
    } else if (playerWinCount == 5){
        let playerBar = document.querySelector('#leftBar')
        playerBar.style.height = '100%';
    }
}

function computerProgress () {
    if (playerWinCount == 0) {
        let playerBar = document.querySelector('#leftBar')
        playerBar.style.height = '0%';
    }
    if (computerWinCount == 1) {
        let computerBar = document.querySelector('#rightBar')
        computerBar.style.height = '20%'
    } else if (computerWinCount == 2) {
        let computerBar = document.querySelector('#rightBar')
        computerBar.style.height = '40%'
    } else if (computerWinCount == 3) {
        let computerBar = document.querySelector('#rightBar')
        computerBar.style.height = '60%'
    } else if (computerWinCount == 4) {
        let computerBar = document.querySelector('#rightBar')
        computerBar.style.height = '80%'
    } else if (computerWinCount == 5) {
        let computerBar = document.querySelector('#rightBar')
        computerBar.style.height = '100%'
    }
}



change()
const inst = setInterval(change, 5000)
rock.addEventListener('click', myFun)
paper.addEventListener('click', myPaper)
scissor.addEventListener('click', myScissor)