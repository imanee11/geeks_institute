const express = require('express');
const app = express();

app.use(express.json());


const blogRoutes = require('./routes/posts');
app.use('/posts', blogRoutes);

app.listen(3000, () => {
  console.log('server is running on http://localhost:3000');
});
