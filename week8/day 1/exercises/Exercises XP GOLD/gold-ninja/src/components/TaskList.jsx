import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskList = () => {
    const { tasks, dispatch } = useContext(TaskContext);

    if (tasks.length === 0) return <p className="text-center text-gray-500">No tasks yet.</p>;

    return (
        <ul className="space-y-2">
            {tasks.map(task => (
                <li
                    key={task.id}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded border"
                >
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch({ type: 'toggle', payload: task.id })}
                        />
                        <span className={task.completed ? 'line-through text-gray-400' : ''}>
                            {task.text}
                        </span>
                    </div>

                    <button
                        onClick={() => dispatch({ type: 'remove', payload: task.id })}
                        className="text-red-500 hover:underline"
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
