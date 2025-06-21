const express = require('express');
const app = express();
const PORT = 3001;

app.get('/users', (req, res) => {
    res.json([
        { id: 1, username: "somebody" },
        { id: 2, username: "somebody_else" },
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
