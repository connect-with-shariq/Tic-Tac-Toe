let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-container")
let msg  = document.querySelector("#msg")

let count = 0;

let turnO = true//playerX , playerO

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turnO === true) {
            box.innerText = "O";
            turnO = false
        }
        else {
            box.innerText = "X";
            turnO = true
        }
        box.disabled = true;
        count++;

        let isWinner = checkWiner();
        if(count ===9 && !isWinner){
            gameDraw();
        }

    })
})

const checkWiner = () => {
    for (let pattern of winPattern) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        if(position1 !="" && position2 !="" && position3 !="") {
            if(position1 === position2 && position2 === position3){
               
                showWinner(position1);
            }
        }
    }
    
     
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulation the winner is ${winner}`;
    msgCont.classList.remove("hide");
    disalblebtn()
    
}

const disalblebtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    } 
}
const enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText =""
    } 
}


const resetgame = () =>{
    turnO = true
    enablebtn()
    msgCont.classList.add("hide")

}

newgameBtn.addEventListener("click",()=>{
    resetgame()
})
resetbtn.addEventListener("click",()=>{
    resetgame()
})

const gameDraw = () =>{
    msg.innerText = "game is Draw";
    msgCont.classList.remove("hide");
    disalblebtn;
}