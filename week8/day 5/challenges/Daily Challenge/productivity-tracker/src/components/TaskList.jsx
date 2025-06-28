import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, selectTasksByCategory, toggleComplete } from '../features/tasks/taskSlice';

const TaskList = ({ categoryId }) => {
    const tasks = useSelector(selectTasksByCategory(categoryId));
    const dispatch = useDispatch();

    const handleToggle = useCallback(id => {
        dispatch(toggleComplete(id));
    }, [dispatch]);

    const handleDelete = useCallback(id => {
        dispatch(deleteTask(id));
    }, [dispatch]);

    return (
        <div>
            <ul className="space-y-2 mt-4">
                {tasks.map(task => (
                    <li key={task.id} className="flex items-center justify-between p-3 border rounded shadow-sm hover:bg-gray-50">
                        <div>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggle(task.id)}
                                className="mr-2"
                            />
                            <span className={task.completed ? "line-through text-gray-400" : ""}>
                                {task.title}
                            </span>
                        </div>
                        <button
                            onClick={() => handleDelete(task.id)}
                            className="text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;