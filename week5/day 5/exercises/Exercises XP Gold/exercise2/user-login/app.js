const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [];

const secret = "123abc";


// register
app.post("/api/register", async (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.status(201).json({ message: "user registered successfully" });
});

// login
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(400).json({ message: "invalid credentials" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return res.status(400).json({ message: "invalid credentials" });
    }

    const token = jwt.sign({ username }, secret, { expiresIn: "1h" });
    res.json({ message: "login successful", token });
});

app.get("/api/profile", (req, res) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
        return res.status(401).json({ message: "missing or invalid token" });
    }

    const token = auth.split(" ")[1];
    try {
        const decoded = jwt.verify(token, secret);
        res.json({ message: "profile data", user: decoded });
    } catch {
        res.status(401).json({ message: "invalid or expired token" });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
