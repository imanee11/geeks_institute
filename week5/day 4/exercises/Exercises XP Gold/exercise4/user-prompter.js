const prompt = require('prompt-sync')();
const { users } = require('./user-generator');

function addUserFromInput() {
    const name = prompt("Enter name: ");
    const street = prompt("Enter street: ");
    const country = prompt("Enter country: ");

    const user = { name, street, country };
    users.push(user);
    console.log("User added:", user);
}

module.exports = addUserFromInput;
