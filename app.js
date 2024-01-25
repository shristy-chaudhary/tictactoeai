let boxes = document.querySelectorAll(".box");
let resultbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-conatiner");
let msg;

msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
    turn0 = true;
    enable();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText= "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkwinner();
    
        if (count === 9 && !isWinner) {
          gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disable();
  };

const disable = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enable = () => {
    for (let box of boxes){
        box.enabled = true;
        box.innerText = "";
    }
};


const showwinner = (winner) => {
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();
};

const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                showwinner(pos1value);
                return true;
            }
        }
    }
}





newbtn.addEventListener("click",resetgame);
resultbtn.addEventListener("click",resetgame);