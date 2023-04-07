let signs=["Rock","Paper","Scissors"]

let rock=document.getElementById("rock")
let paper=document.getElementById("paper")
let scissors=document.getElementById("scissors")
let player1=document.getElementById("player1-choice")
let player2=document.getElementById("player2-choice")
let message=document.getElementById("message")

let choice=''
let computerChoice=''
let computerChoiceValue=0

rock.addEventListener("click",()=>{
    choice='Rock'
    findWinner()
})
paper.addEventListener("click",()=>{
    choice='Paper'
    findWinner()
})
scissors.addEventListener("click",()=>{
    choice='Scissors'
    findWinner()
})

function findWinner(){
    computerChoiceValue=Math.floor(Math.random()*3)
    computerChoice=signs[computerChoiceValue]

    player1.textContent=choice
    player2.textContent=computerChoice

    if(computerChoice=="Rock" && choice=="Scissors"){
        message.textContent="Computer Wins!!"
    }
    else if(computerChoice=="Paper" && choice=="Rock"){
        message.textContent="Computer Wins!!"
        }
    else if(computerChoice=="Scissors" && choice=="Paper"){
        message.textContent="Computer Wins!!"
    }
    else if(computerChoice==choice){
        message.textContent="DRAW!!"
        }
    else{
        message.textContent="YOU WIN!!"
    }
}


