const { users, generateFakeUser } = require('./user-generator');
const addUserFromInput = require('./user-prompter');

generateFakeUser();
generateFakeUser();
generateFakeUser();

addUserFromInput();

console.log("\nAll Users:");
console.log(users);
