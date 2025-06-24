import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

export default function TodoInput() {
    
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className="flex gap-2 my-4">
            <input
                className="border px-3 py-2 w-full rounded-md"
                placeholder="add a new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAdd} className="bg-red-300 hover:bg-red-300/80 rounded-md text-white px-4 py-2">
                Add
            </button>
        </div>
    );
}
