const express = require('express');
const app = express();
const taskRoutes = require('./server/routes/taskRoutes');

app.use(express.json());
app.use('/api', taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
