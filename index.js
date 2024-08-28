console.log("welcome to tic tac toe");
let music=new Audio("music.mp3")
let audioTurn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn = "X"
let isGameOver=false

// function to change turn
const changeTurn=()=>{
    return turn==='X'?'0':'X'
}

// function to check for win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+"won"
            isGameOver=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='120px'
        }
    })
}

// game logic
let boxes=document.getElementsByClassName('box')
Array.from(boxes).forEach(element=>{
    let boxText=element.querySelector('.boxtext') // div ke andar ke andar i.e why element
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText=turn;
            turn=changeTurn()
            audioTurn.play()
            checkWin()
            if(!isGameOver)
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
        }
    })

})

// reset game
// reset=document.getElementById(reset)
reset.addEventListener("click",()=>{
    let boxText=document.querySelectorAll('.boxtext')
    Array.from(boxText).forEach(element=>{
        element.innerText=""
    })
    turn="X"
    isGameOver=false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})