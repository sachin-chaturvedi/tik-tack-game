
let but = document.querySelectorAll(".game");
let set = document.querySelector(".reset");
let newGamebtn = document.querySelector("#new-btn");
let newContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//we know the playerO , and playerY is come.
const winp = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];

but.forEach((game) => {
    game.addEventListener("click", () => {
        console.log("game was click in this frame");
        if (turn0) {
            game.innerText = "O";
            turn0 = false;
        } else {
            game.innerText = "X";
            turn0 = true;
        }
        game.disabled = true;

        checkWinner();

    });
});

const enableBoxes = () => {
    for (let b of but) {
        b.disabled = false;
        b.innerText = "";

    }
}
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    newContainer.classList.add("hide");

}

const disableBoxes = () => {
    for (let b of but) {
        b.disabled = true;
    }
};
const showWinner = (Winner) => {
    msg.innerText = `Congratulation ,Winner is  : ${Winner}`;
    newContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let p of winp) {
        let pos1val = but[p[0]].innerText;
        let pos2val = but[p[1]].innerText;
        let pos3val = but[p[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
set.addEventListener("click", resetGame);

