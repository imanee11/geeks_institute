import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDay } from '../redux/tasksSlice';

export default function DatePicker() {
    const dispatch = useDispatch();
    const selectedDay = useSelector(state => state.tasks.selectedDay);

    function handleChange(e) {
        dispatch(setSelectedDay(e.target.value));
    }

    return (
        <div className="mb-4">
            <label className="text-gray-700 font-medium">
                Select day:{' '}
                <input
                    type="date"
                    value={selectedDay}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-400"
                />
            </label>
        </div>
    );
}
