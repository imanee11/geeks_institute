// server.js
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, "public")));

let users = {};

io.on("connection", (socket) => {
    socket.on("joinRoom", (username) => {
        users[socket.id] = username;
        io.emit("userList", Object.values(users));
        socket.broadcast.emit("message", `${username} joined the chat`);
    });

    socket.on("chatMessage", (msg) => {
        const username = users[socket.id];
        io.emit("message", `${username}: ${msg}`);
    });

    socket.on("disconnect", () => {
        const username = users[socket.id];
        delete users[socket.id];
        io.emit("userList", Object.values(users));
        io.emit("message", `${username} left the chat`);
    });
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
