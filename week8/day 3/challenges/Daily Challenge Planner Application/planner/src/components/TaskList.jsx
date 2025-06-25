import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../store';


const TaskList = ({ selectedDate }) => {

    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.tasksByDate[selectedDate] || [])

    const [editTaskId, setEditTaskId] = useState(null);
    const [editText, setEditText] = useState('');


    const startEditing = (task) => {
        setEditTaskId(task.id);
        setEditText(task.text);
    };

    const saveEdit = () => {
        if (!editText.trim()) return;
        dispatch(editTask({ date: selectedDate, id: editTaskId, text: editText }));
        setEditTaskId(null);
    };

    const cancelEdit = () => setEditTaskId(null);


    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className="flex justify-between p-2 bg-white mb-2 rounded shadow items-center">
                        {editTaskId === task.id ? (
                            <div className="flex gap-2 flex-grow">
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={e => setEditText(e.target.value)}
                                    className="border p-2 rounded flex-grow"
                                />
                                <button onClick={saveEdit} className="bg-green-500 text-white px-3 rounded hover:bg-green-600">Save</button>
                                <button onClick={cancelEdit} className="bg-gray-300 px-3 rounded hover:bg-gray-400">Cancel</button>
                            </div>
                        ) : (
                            <>
                                <span>{task.text}</span>
                                <div>
                                    <button
                                        onClick={() => startEditing(task)}
                                        className="text-blue-600 hover:text-blue-800 mr-4"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteTask({ date: selectedDate, id: task.id }))}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
                {tasks.length === 0 && <li className="text-gray-500">no tasks for this day</li>}
            </ul>

        </div>
    );
};

export default TaskList;