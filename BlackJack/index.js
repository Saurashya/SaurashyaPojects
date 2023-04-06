
let sum=0
let firstCard=0
let secondCard=-0
let Blackjack=false
let isAlive=true

let messageEl=document.getElementById("message-el")
let start=document.querySelector("#start")
let sumDisplay=document.getElementById("sum-el")
let cardsDisplay=document.getElementById("cards-el")
let addCard=document.getElementById("addCard")
let message=' '

function messageDisplay(){
    if(sum<21){
        message="Do you want another card?"
    }else if(sum==21){
        message="Congratulation!! A Blackjack"
        Blackjack=true
    }else{
        message="You are out of the game!!"
        isAlive=false
    }
    messageEl.textContent=message
}



start.addEventListener("click",()=>{
    start.textContent="Start Game"
    firstCard=Math.floor((Math.random() * 13) + 1);
    secondCard=Math.floor((Math.random() * 13) + 1);
    sum=firstCard+secondCard
    cardsDisplay.textContent="Cards: "+firstCard+" "+secondCard
    sumDisplay.textContent ="Sum: " +sum
    messageDisplay();
    addCard.disabled = false
    return sum
}      
)

addCard.addEventListener("click",()=>{
    if(sum>=21){
        addCard.disabled = true
        start.textContent="New Game"
    }
    else{
        let thirdCard=Math.floor((Math.random() * 13) + 1)
        sum=sum+thirdCard
        cardsDisplay.textContent="Cards: "+firstCard+" "+secondCard+" "+thirdCard
        sumDisplay.textContent ="Sum: " +sum
    }
    messageDisplay()
})
