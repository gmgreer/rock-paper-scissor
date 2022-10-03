let playerScore = 0;
let computerScore = 0;



const playerChoice = document.getElementById("player-score")
const computerChoice = document.getElementById("computer-score")
const playerCount = document.getElementById("player-counter")
const computerCount = document.getElementById("computer-counter")
const winMessage = document.getElementById("win-lose")
const method = document.getElementById("method")
const closeModal = document.querySelector(".close-modal")
const modal = document.querySelector("#modal")
const endMessage = document.getElementById("modal-message")
const openMode = document.querySelector(".open-modal")




const reset = () => {
    playerScore = 0
    computerScore = 0
   playerCount.innerHTML = "Player: 0"
   computerCount.innerHTML = "Computer: 0"
}

closeModal.addEventListener('click', () => {
    reset()
    modal.close();
})

const fight = (option) => {
let comp = random()

if (playerScore > 4 || computerScore > 4) {
   
    if(playerScore === 5) {
        console.log("player wins")
        endMessage.innerHTML = "YOU WIN!!!"
        modal.showModal()
        return
        
    }
    if (computerScore === 5) {
        console.log("computer wins")
        endMessage.innerHTML = "YOU LOSE!!!"
        modal.showModal()
        return
    }
    
}
if (option === "rock" && comp === "rock") {
    winMessage.innerHTML = "You Tie";
    method.innerHTML = "Rock vs. Rock = Rock?";
    playerChoice.innerHTML = "👊🏽";
    computerChoice.innerHTML = "👊🏽";
}
if (option === "rock" && comp === "paper") {
    winMessage.innerHTML = "You Lose";
    method.innerHTML = "Paper beats Rock!";
    playerChoice.innerHTML = "👊🏽";
    computerChoice.innerHTML = "✋🏽";
    computerScore++;
    computerCount.innerHTML = "Computer: " + computerScore;
}
if (option === "rock" && comp === "scissor") {
    winMessage.innerHTML = "You Win";
    method.innerHTML = "Rock beats Scissor!";
    playerChoice.innerHTML = "👊🏽";
    computerChoice.innerHTML = "✌🏽";
    playerScore++;
    playerCount.innerHTML = "Player: " + playerScore;
}
if (option === "paper" && comp === "rock") {
    winMessage.innerHTML = "You Win";
    method.innerHTML = "Paper beats Rock!";
    playerChoice.innerHTML = "✋🏽";
    computerChoice.innerHTML = "👊🏽";
    playerScore++;
    playerCount.innerHTML = "Player: " + playerScore;
}
if (option === "paper" && comp === "paper") {
    winMessage.innerHTML = "You Tie";
    method.innerHTML = "Paper can not defeat itself!";
    playerChoice.innerHTML = "✋🏽";
    computerChoice.innerHTML = "✋🏽";    
}
if (option === "paper" && comp === "scissor") {
    winMessage.innerHTML = "You Lose";
    method.innerHTML = "Scissor cuts Paper!";
    playerChoice.innerHTML = "✋🏽";
    computerChoice.innerHTML = "✌🏽";
    computerScore++;
    computerCount.innerHTML = "Computer: " + computerScore;
}
if (option === "scissor" && comp === "rock") {
    winMessage.innerHTML = "You Lose";
    method.innerHTML = "Scissors can't cut rock!";
    playerChoice.innerHTML = "✌🏽";
    computerChoice.innerHTML = "👊🏽";
    computerScore++;
    computerCount.innerHTML = "Computer: " + computerScore;
}
if (option === "scissor" && comp === "paper") {
    winMessage.innerHTML = "You Win";
    method.innerHTML = "Scissor cuts Paper";
    playerChoice.innerHTML = "✌🏽";
    computerChoice.innerHTML = "✋🏽";
    playerScore++;
    playerCount.innerHTML = "Player: " + playerScore;
}
if (option === "scissor" && comp === "scissor") {
    winMessage.innerHTML = "You Tie";
    method.innerHTML = "Scissor on Scissor action huh";
    playerChoice.innerHTML = "✌🏽";
    computerChoice.innerHTML = "✌🏽";
    
}


}



const random = () => {
    let num = Math.floor(Math.random() * 3)
    if (num === 1) {
        return "rock"
    } else if (num === 2) {
        return "paper"
    } else {
        return "scissor"
    }
}