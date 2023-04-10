console.log("Welcome to Tic Tak Toe Game");
let music=new Audio("music.mp3");
let turnAudio=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let isgameover=false;

//Change turn
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}

//Check for win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{
        if(boxtext[e[0]].innerText===boxtext[e[1]].innerText && boxtext[e[2]].innerText===boxtext[e[1]].innerText && boxtext[e[0]].innerText!==""){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" has won";
            gameover.play();
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="7vw";
        }
    })
}
//game logic
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            turnAudio.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
            }
        }
    })
})

//Restart game
reset=document.getElementById('reset');

reset.addEventListener("click",()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    isgameover=false;
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0vw";

})
