const fs = require('fs');

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());
    } catch (err) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

// add a new note
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicate = notes.find(note => note.title === title);

    if (duplicate) {
        console.log('note already exists');
    } else {
        notes.push({ title, body });
        saveNotes(notes);
        console.log('note added');
    }
};

// list all notes
const listNotes = () => {
    const notes = loadNotes();
    console.log('your Notes:');
    notes.forEach((note, i) => {
        console.log(`${i + 1}. ${note.title}`);
    });
};

const readNote = (title) => {
    const notes = loadNotes();
    const found = notes.find(note => note.title === title);

    if (found) {
        console.log(`Title: ${found.title}`);
        console.log(`Body: ${found.body}`);
    } else {
        console.log('note not found');
    }
};

// remove a note
const removeNote = (title) => {
    const notes = loadNotes();
    const filtered = notes.filter(note => note.title !== title);

    if (notes.length === filtered.length) {
        console.log('note not found');
    } else {
        saveNotes(filtered);
        console.log('note removed');
    }
};

module.exports = {
    addNote,
    listNotes,
    readNote,
    removeNote
};
