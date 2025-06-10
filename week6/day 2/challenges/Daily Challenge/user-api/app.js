const express = require('express');
const app = express();

const userRoutes = require('./server/routes/userRoutes');

app.use(express.json());

app.use('/api', userRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'route not found' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'server error' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
