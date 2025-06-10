const express = require("express");
const router = express.Router();

const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

router.get("/", (req, res) => {
    let emojiOptions = emojis
        .map((e) => `<option value="${e}">${e}</option>`)
        .join("");

    res.send(`
    <h1>Emoji Greeting App</h1>
    <form method="POST" action="/greet">
      <label>Your Name:</label><br/>
      <input type="text" name="name" required /><br/><br/>
      
      <label>Choose an Emoji:</label><br/>
      <select name="emoji">${emojiOptions}</select><br/><br/>
      
      <button type="submit">Greet Me!</button>
    </form>
  `);
});

router.post("/greet", (req, res) => {
    const { name, emoji } = req.body;

    if (!name.trim()) {
        return res.send("<h2>pls enter ur name! Go back and try again.</h2>");
    }

    res.send(`
    <h1>Greeting</h1>
    <p>Hello, <strong>${name}</strong>! ${emoji}</p>
    <a href="/">Go back</a>
  `);
});

module.exports = router;
