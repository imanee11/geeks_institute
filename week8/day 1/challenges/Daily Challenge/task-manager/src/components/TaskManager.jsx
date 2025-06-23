import React, { useContext, useRef, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskManager = () => {

    const { state, dispatch } = useContext(TaskContext);
    const inputRef = useRef();
    const editInputRef = useRef();
    const [editId, setEditId] = useState(null);

    const handleAddTask = () => {
        const text = inputRef.current.value.trim();
        if (text !== '') {
            dispatch({ type: 'ADD_TASK', payload: text });
            inputRef.current.value = ''
        }
    };

    const handleEditTask = (id, text) => {
        dispatch({ type: 'EDIT_TASK', payload: { id, text } });
        setEditId(null)
    };

    const filteredTasks = state.tasks.filter(task => {
        if (state.filter === 'ACTIVE') return !task.completed;
        if (state.filter === 'COMPLETED') return task.completed;
        return true;
    });

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">📝 Task Manager</h2>

            <div className="flex gap-2 mb-4">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Add a task"
                    className="flex-1 border border-gray-300 rounded px-3 py-2"
                />
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add
                </button>
            </div>

            <div className="flex justify-center gap-2 mb-4">
                <button
                    onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'ALL' })}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                    All
                </button>
                <button
                    onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'ACTIVE' })}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                    Active
                </button>
                <button
                    onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'COMPLETED' })}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                    Completed
                </button>
            </div>

            <ul className="space-y-2">
                {filteredTasks.map(task => (
                    <li
                        key={task.id}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded border"
                    >
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                            />

                            {editId === task.id ? (
                                <input
                                    ref={editInputRef}
                                    defaultValue={task.text}
                                    onBlur={() => handleEditTask(task.id, editInputRef.current.value)}
                                    onKeyDown={(e) =>
                                        e.key === 'Enter' && handleEditTask(task.id, editInputRef.current.value)
                                    }
                                    className="border rounded px-2 py-1"
                                    autoFocus
                                />
                            ) : (
                                <span
                                    className={`ml-1 ${task.completed ? 'line-through text-gray-400' : ''}`}
                                >
                                    {task.text}
                                </span>
                            )}
                        </div>

                        {editId !== task.id && (
                            <button
                                onClick={() => setEditId(task.id)}
                                className="text-blue-500 hover:underline text-sm"
                            >
                                Edit
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;