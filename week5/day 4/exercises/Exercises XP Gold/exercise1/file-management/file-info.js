const fs = require('fs');
const path = require('path');

function showFileInfo() {
    const filePath = path.join(__dirname, 'data', 'example.txt');

    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log('file exists');
        console.log('size:', stats.size, 'bytes');
        console.log('created:', stats.birthtime);
    } else {
        console.log('file not found');
    }
}

module.exports = showFileInfo;
