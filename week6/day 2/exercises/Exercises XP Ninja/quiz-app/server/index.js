const express = require('express');
const cors = require('cors');
const app = express();
const quizRoutes = require('./routes/quizRoutes');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', quizRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
