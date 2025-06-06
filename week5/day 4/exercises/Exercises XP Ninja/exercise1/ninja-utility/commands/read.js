import fs from 'fs';
import path from 'path';

export default function (filename) {
    const fullPath = path.resolve(filename);
    fs.readFile(fullPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Cannot read file:', err.message);
        } else {
            console.log('File content:\n', data);
        }
    });
}
