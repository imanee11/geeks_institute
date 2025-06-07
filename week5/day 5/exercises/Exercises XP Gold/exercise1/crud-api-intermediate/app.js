const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const url = "https://jsonplaceholder.typicode.com/posts";

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});

app.get("/api/posts", async (req, res) => {
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Error fetching posts" });
    }
});


app.get("/api/posts/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`${url}/${id}`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Error fetching post" });
    }
});


app.post("/api/posts", async (req, res) => {
    try {
        const response = await axios.post(url, req.body);
        res.status(201).json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Error creating post" });
    }
});

app.put("/api/posts/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const response = await axios.put(`${url}/${id}`, req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: "Error updating post" });
    }
});


app.delete("/api/posts/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await axios.delete(`${url}/${id}`);
        res.json({ message: "Post deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting post" });
    }
});



