const { format, addDays } = require('date-fns');

function displayFutureDate() {
    // get date 
    const now = new Date();
    const futureDate = addDays(now, 5);
    const formattedDate = format(futureDate, 'MMMM dd, yyyy');
    console.log('Future date after 5 days:', formattedDate);
}

module.exports = displayFutureDate;
