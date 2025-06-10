const express = require('express');
const app = express();
const bookRoutes = require('./server/routes/bookRoutes');

app.use(express.json());
app.use('/api', bookRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});


app.use((err, req, res, next) => {
  console.error('Error middleware:', err);  // Log the real error
  res.status(500).json({ message: 'server error' });
});