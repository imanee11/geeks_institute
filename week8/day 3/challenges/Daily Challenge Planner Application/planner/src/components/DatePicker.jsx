import React from 'react';

const DatePicker = ({ selectedDate, onChange }) => {
    return (
        <div className='mb-4'>
            <input type="date" className='border p-2 rounded' value={selectedDate} onChange={e => onChange(e.target.value)} />
        </div>
    );
};

export default DatePicker;