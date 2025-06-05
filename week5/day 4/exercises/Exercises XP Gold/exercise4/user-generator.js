const { faker } = require('@faker-js/faker');

const users = [];

function generateFakeUser() {
    const user = {
        name: faker.person.fullName(),
        street: faker.location.streetAddress(),
        country: faker.location.country()
    };
    users.push(user);
    return user;
}

module.exports = {
    users,
    generateFakeUser
};
