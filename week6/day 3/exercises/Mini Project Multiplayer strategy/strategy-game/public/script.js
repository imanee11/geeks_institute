let gameId = null;
let currentPlayer = "Alice";
document.getElementById("currentPlayer").innerText = currentPlayer;

function setPlayer(name) {
    currentPlayer = name;
    document.getElementById("currentPlayer").innerText = currentPlayer;
}

async function startGame() {
    const res = await fetch("/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ player1: "Alice", player2: "Bob" }),
    });
    const data = await res.json();
    gameId = data.gameId;
    currentPlayer = prompt("enter player name (Alice or Bob):");
    renderGrid(data.game);
}

async function move(direction) {
    const res = await fetch("/move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gameId, player: currentPlayer, direction }),
    });
    const data = await res.json();
    document.getElementById("message").innerText = data.message;
    if (data.game) renderGrid(data.game);
}

function renderGrid(game) {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    for (let y = 0; y < game.gridSize; y++) {
        for (let x = 0; x < game.gridSize; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");

            for (const [player, pos] of Object.entries(game.positions)) {
                if (pos.x === x && pos.y === y) {
                    cell.classList.add("player");
                    cell.innerText = player[0];
                }
            }

            for (const [player, base] of Object.entries(game.bases)) {
                if (base.x === x && base.y === y) {
                    cell.classList.add("base");
                    cell.innerText = "B";
                }
            }

            for (const obs of game.obstacles) {
                if (obs.x === x && obs.y === y) {
                    cell.classList.add("obstacle");
                }
            }

            grid.appendChild(cell);
        }
    }
}

startGame();
