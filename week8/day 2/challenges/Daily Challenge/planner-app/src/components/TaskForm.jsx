import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/tasksSlice';

export default function TaskForm({ day, task, onClose }) {
    const dispatch = useDispatch();
    const [text, setText] = useState(task ? task.text : '');

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return alert("Task can't be empty");

        if (task) {
            dispatch(editTask({ day, taskId: task.id, newText: text }));
            if (onClose) onClose();
        } else {
            dispatch(addTask(day, text));
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-4">
            <input
                type="text"
                placeholder="Enter task"
                value={text}
                onChange={e => setText(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 w-full focus:outline-none focus:ring focus:border-blue-400"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
            >
                {task ? 'Save' : 'Add'}
            </button>
            {task && (
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-300 text-black px-4 py-1 rounded hover:bg-gray-400 transition"
                >
                    Cancel
                </button>
            )}
        </form>
    );
}
