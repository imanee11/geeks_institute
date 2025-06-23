import React, { useContext, useRef } from 'react';
import { TaskContext } from './TaskContext';

const AddTask = () => {
    const { dispatch } = useContext(TaskContext);
    const inputRef = useRef();

    const handleAdd = () => {
        dispatch({ type: 'add', payload: inputRef.current.value });
        inputRef.current.value = '';
    };

    return (
        <div className="flex gap-2 mb-4">
            <input
                ref={inputRef}
                type="text"
                placeholder="Add new task"
                className="flex-1 border border-gray-300 rounded px-3 py-2"
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            />
            <button
                onClick={handleAdd}
                className="bg-green-500 text-white px-4 rounded hover:bg-green-600"
            >
                Add
            </button>
        </div>
    );
};

export default AddTask;
