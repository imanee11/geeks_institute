const express = require('express');
const app = express();
const PORT = 5000; // Different from React’s port

const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Doe' },
    { id: 3, firstName: 'Ziv', lastName: 'Chen' },
    { id: 4, firstName: 'Isaac', lastName: 'Groisman' },
    { id: 5, firstName: 'Avner', lastName: 'Maman' },
    { id: 6, firstName: 'Megan', lastName: 'Dreyfuss' }
];

app.get('/api/customers', (req, res) => {
    res.json(customers);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
