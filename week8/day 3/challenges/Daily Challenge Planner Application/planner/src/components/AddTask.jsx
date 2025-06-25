import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

const AddTask = ({ selectedDate }) => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!text.trim()) return;
        dispatch(addTask({ date: selectedDate, text }));
        setText('');
    };

    return (
        <div className="flex gap-2 mb-4">
            <input type="text" className="border p-2 rounded flex-grow" placeholder='new task' value={text} onChange={e => setText(e.target.value)} />
            <button className="bg-red-400 text-white px-4 rounded hover:bg-red-300" onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddTask;