import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';

const AddTodo = () => {

    const [text , setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim() === '') return;
        dispatch(addTodo(text));
        setText('');
    }

    return (
        <div className="flex gap-2 mb-4">
            <input className="border border-gray-300 p-2 rounded w-full" type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Enter Todo' />
            <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-300" onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddTodo;