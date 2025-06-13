const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'azer',
        database: 'quiz_game'
    }
});

module.exports = db;
