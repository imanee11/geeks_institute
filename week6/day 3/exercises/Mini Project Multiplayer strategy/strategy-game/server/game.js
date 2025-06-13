function createGame(player1, player2) {
    return {
        gridSize: 10,
        bases: {
            [player1]: { x: 0, y: 0 },
            [player2]: { x: 9, y: 9 }
        },
        positions: {
            [player1]: { x: 0, y: 0 },
            [player2]: { x: 9, y: 9 }
        },
        turn: player1,
        winner: null,
        obstacles: [
            { x: 5, y: 5 },
            { x: 4, y: 5 },
            { x: 5, y: 4 }
        ]
    };
}

function isAdjacent(p1, p2) {
    const dx = Math.abs(p1.x - p2.x);
    const dy = Math.abs(p1.y - p2.y);
    return (dx + dy === 1);
}

function movePlayer(game, player, direction) {
    if (game.winner) return { message: `Game over. ${game.winner} won.` };
    if (game.turn !== player) return { message: "not ur turn." };

    const move = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
    if (!move[direction]) return { message: "invalid direction." };

    const [dx, dy] = move[direction];
    const pos = game.positions[player];
    const newX = pos.x + dx;
    const newY = pos.y + dy;

    if (newX < 0 || newX >= game.gridSize || newY < 0 || newY >= game.gridSize) {
        return { message: "out of bounds." };
    }

    if (game.obstacles.some(o => o.x === newX && o.y === newY)) {
        return { message: "obstacle in the way." };
    }

    pos.x = newX;
    pos.y = newY;

    const opponent = Object.keys(game.positions).find(p => p !== player);
    const opponentBase = game.bases[opponent];

    if (pos.x === opponentBase.x && pos.y === opponentBase.y) {
        game.winner = player;
        return { message: `${player} wins!`, game };
    }

    if (isAdjacent(pos, opponentBase)) {
        return { message: `${player} is ready to attack the base!`, game };
    }

    game.turn = opponent;
    return { message: "move successful.", game };
}

module.exports = { createGame, movePlayer };
