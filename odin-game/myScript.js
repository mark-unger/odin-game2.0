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



function playRound(playerSelection, computerSelection) {
     
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    } else{ 
        if (((playerSelection == "rock") && 
        (computerSelection == "paper")) || ((playerSelection == "paper") && 
        (computerSelection == "scissor")) || ((playerSelection == "scissor") && (computerSelection == "rock"))) {
            return "On no... you lost"
    }   else if (((playerSelection == "rock") && (computerSelection == "scissor")) 
    || ((playerSelection == "paper") && (computerSelection == "rock")) 
    || ((playerSelection == "scissor") && (computerSelection == "paper"))) {
            return "Hey! You won!"
        }
    }
}
    



function game() {
    let playerSelection = (window.prompt("Enter rock, paper, or scissor")).toLowerCase()
    let computerSelection = computerPlay()
    let score = 0
    let i = 0

    while (i < 5) {
        let round = playRound(playerSelection, computerSelection)
        
         if (i != 4) { 
    
            if (round == "It's a tie!") {
                console.log(`"It's a tie! Your score is ${score}. That was round ${i +1}."`)
            } else if ( round == "Oh no... you lost") {
                console.log(`"On no... you lost Your score is ${score}. That was round ${i +1}."`)
            } else {
                score ++
                console.log(`"Hey! You won! Your score is ${score}. That was round ${i +1}."`)
                
            }
            playerSelection = (window.prompt("Enter rock, paper, or scissor")).toLowerCase()
            computerSelection = computerPlay()       
               
            
        i++
        } else {
            if (round == "It's a tie!") {
                console.log(`"It's a tie! Your score is ${score}. That was round ${i +1}."`)
            } else if ( round == "Oh no... you lost") {
                console.log(`"On no... you lost Your score is ${score}. That was round ${i +1}."`)
            } else {
                score ++
                console.log(`"Hey! You won! Your score is ${score}. That was round ${i +1}."`)
                
            }
            console.log("Thanks for playinh!")
            break
        }
    }
    
    
}
    
game()