// app.js
const yargs = require('yargs');
const notes = require('./notes');
const _ = require('lodash');

const command = yargs.argv._[0];
const title = yargs.argv.title;
const body = yargs.argv.body;

switch (command) {
    case 'add':
        notes.addNote(title, body);
        break;

    case 'list':
        notes.listNotes();
        break;

    case 'read':
        notes.readNote(title);
        break;

    case 'remove':
        notes.removeNote(title);
        break;

    default:
        console.log('command not recognized');
}
