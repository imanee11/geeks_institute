let userSymbol = "";
let aiSymbol = "";
let board = Array(9).fill("");
let gameOver = false;
let currentDifficulty = "hard";

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];

//select x or o
const selectSymbol = (symbol) => {
    userSymbol = symbol
    aiSymbol = symbol === 'X' ? 'O' : 'X'
    document.getElementById('gameMessage').innerText = `You are ${userSymbol}`;
}

//click
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        let index = box.dataset.index;

        if (!gameOver && board[index] === "" && userSymbol !== "") {
            board[index] = userSymbol
            box.innerText = userSymbol
            checkWinner();
            if (!gameOver) {
                setTimeout(computerTurn, 300);
            }
        }
    })
})

// ai turn
const computerTurn = () => {
    let index
    if (currentDifficulty === 'easy') {
        index = getRandomMove();
    } else {
        index = getBestMove();
    }

    if (index !== -1) {
        board[index] = aiSymbol;
        document.querySelector(`[data-index="${index}"]`).innerText = aiSymbol;
        checkWinner()
    }
}
// randow easy mode
const getRandomMove = () => {
    const emptyIndexes = board
        .map((val, i) => (val === "" ? i : null))
        .filter((val) => val !== null);

    if (emptyIndexes.length === 0) return -1;
    const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
    return emptyIndexes[randomIndex];
}

const getBestMove = () => {
    //try to win
    for (let combo of winCombos) {
        let [a, b, c] = combo;
        if (board[a] === aiSymbol && board[b] === aiSymbol && board[c] === "") return c;
        if (board[a] === aiSymbol && board[c] === aiSymbol && board[b] === "") return b;
        if (board[b] === aiSymbol && board[c] === aiSymbol && board[a] === "") return a;
    }

    //block the player
    for (let combo of winCombos) {
        let [a, b, c] = combo;
        if (board[a] === userSymbol && board[b] === userSymbol && board[c] === "") return c;
        if (board[a] === userSymbol && board[c] === userSymbol && board[b] === "") return b;
        if (board[b] === userSymbol && board[c] === userSymbol && board[a] === "") return a;
    }

    if (board[4] === "") return 4;

    return getRandomMove();
};




const checkWinner = () => {
    for (let combo of winCombos) {
        let [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            document.getElementById("gameMessage").innerText =
                board[a] === userSymbol ? "You Win!" : "Computer Wins!";
            return;
        }
    }

    if (!board.includes("")) {
        gameOver = true;
        document.getElementById("gameMessage").innerText = "It's a Tie!";
    }
}

// restart btn
const restartBtn = () => {
    board = Array(9).fill("");
    gameOver = false;
    document.getElementById("gameMessage").innerText = "";
    boxes.forEach((box) => (box.innerText = ""));
}