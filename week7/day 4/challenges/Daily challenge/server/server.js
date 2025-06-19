const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.send({ message: "hello from Express" });
});

app.post("/api/world", (req, res) => {
    console.log("POST /api/world:", req.body);
    res.send({ reply: `i received your POST request. This is what you sent me: ${req.body.post}` });
});


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
