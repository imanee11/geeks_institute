import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';
import TaskForm from './TaskForm';

export default function TaskList() {
    const dispatch = useDispatch();
    const selectedDay = useSelector(state => state.tasks.selectedDay);
    const tasks = useSelector(state => state.tasks.tasksByDay[selectedDay] || []);
    const [editingTaskId, setEditingTaskId] = useState(null);

    return (
        <div className="p-4 bg-white shadow-md rounded">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Tasks for {selectedDay}</h3>
            {tasks.length === 0 && <p className="text-gray-500">No tasks for this day.</p>}
            <ul className="space-y-2">
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className="flex justify-between items-center border-b pb-2"
                    >
                        {editingTaskId === task.id ? (
                            <TaskForm
                                task={task}
                                day={selectedDay}
                                onClose={() => setEditingTaskId(null)}
                            />
                        ) : (
                            <>
                                <span className="text-gray-800">{task.text}</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setEditingTaskId(task.id)}
                                        className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                deleteTask({
                                                    day: selectedDay,
                                                    taskId: task.id
                                                })
                                            )
                                        }
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
