// date.js

function getMinutesLived(birthdateStr) {
    const birthdate = new Date(birthdateStr);
    const now = new Date();

    const diffInMs = now - birthdate;
    const minutesLived = Math.floor(diffInMs / (1000 * 60));

    return `You have lived approximately ${minutesLived.toLocaleString()} minutes.`;
}

const result = getMinutesLived("2001-11-17");

module.exports = result;
