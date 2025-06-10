const db = require('../config/knexfile');

const getAllUsers = () => db('users').select('*');

const getUserById = (id) => db('users').where({ id }).first();

const getUserByUsername = (username) => db('users').where({ username }).first();

const createUser = async (user, hashedPassword) => {
    return db.transaction(async trx => {
        const [newUser] = await trx('users').insert(user).returning('*');
        await trx('hashpwd').insert({
            username: user.username,
            password: hashedPassword
        });
        return newUser;
    });
};

const updateUser = (id, userData) => {
    return db('users').where({ id }).update(userData).returning('*');
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername,
    createUser,
    updateUser
};
