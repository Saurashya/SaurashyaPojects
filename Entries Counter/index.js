//Adder
let count=0

const button=document.querySelector("#increment-btn")
const value=document.querySelector("#count")
const saver=document.querySelector("#save-btn")
const history=document.querySelector("#history")
const clearer=document.querySelector("#clear")

history.innerHTML="Previous Entries: "
button.addEventListener("click",()=>{
    count++
    value.textContent=count
})
saver.addEventListener("click",()=>{
    history.innerHTML+=count+" - "
    count=0;
    value.textContent=count
})
clearer.addEventListener("click",()=>{
    const confirmed=confirm("Do you want to clear")
    console.log(confirmed)
    if(confirmed==true){
        history.innerHTML="Previous Entries: "
    }
})

