import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../app/todosSlice';


const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };


    return (
        <div className="flex mb-6 w-full max-w-md">
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add new todo"
                className="flex-grow border p-2 rounded-l"
            />
            <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 rounded-r"
            >
                Add
            </button>
        </div>
    );
};

export default AddTodo;