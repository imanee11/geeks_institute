const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter ur full name (e.g. John Doe): ', (name) => {
    const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

    if (regex.test(name)) {
        console.log('valid name!');
    } else {
        console.log('invalid name. Example: John Doe');
    }

    rl.close();
});
