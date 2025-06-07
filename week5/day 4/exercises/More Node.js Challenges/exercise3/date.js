function getTimeUntilHoliday() {
    const now = new Date();
    const holidayName = "Christmas";
    const holidayDate = new Date(`${now.getFullYear()}-12-25T00:00:00`);

    if (holidayDate < now) {
        holidayDate.setFullYear(now.getFullYear() + 1);
    }

    const diffMs = holidayDate - now;

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
    const seconds = Math.floor((diffMs / 1000) % 60);

    const today = now.toDateString();
    const message = `Today is ${today}. The next holiday is ${holidayName}, in ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds.`;

    return message;
}

module.exports = getTimeUntilHoliday;
