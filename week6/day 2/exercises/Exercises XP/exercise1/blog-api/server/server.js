const express = require('express');
const app = express();
const postRoutes = require('./routes/postRoutes');

app.use(express.json()); 
app.use('/posts', postRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'route not found' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
