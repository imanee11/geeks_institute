const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { createGame, getGame, movePlayer } = require("./game");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let games = {};

app.post("/start", (req, res) => {
    const { player1, player2 } = req.body;
    const gameId = Date.now().toString();
    games[gameId] = createGame(player1, player2);
    res.json({ gameId, game: games[gameId] });
});

app.post("/move", (req, res) => {
    const { gameId, player, direction } = req.body;
    const game = games[gameId];
    if (!game) return res.status(404).json({ message: "game not found." });

    const result = movePlayer(game, player, direction);
    res.json(result);
});

app.get("/game/:id", (req, res) => {
    const game = games[req.params.id];
    if (!game) return res.status(404).json({ message: "game not found." });
    res.json(game);
});

app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});
