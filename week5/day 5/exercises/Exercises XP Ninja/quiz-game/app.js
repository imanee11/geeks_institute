const express = require("express");
const app = express();
const path = require("path");
const questions = require("./questions");

app.use(express.static("public"));
app.use(express.json());

app.get("/api/questions", (req, res) => {
    res.json(questions);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});
