const express = require('express');
const app = express();
const path = require('path');
const usersRoutes = require('./users')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(usersRoutes);

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});