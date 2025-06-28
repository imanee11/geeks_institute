import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTodo, toggleTodo, deleteTodo, setFilter, selectTodos, selectVisibilityFilter, selectFilteredTodosCount} from '../features/todos/todoSlice';

const filters = ['All', 'Active', 'Completed'];

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);
    const filter = useSelector(selectVisibilityFilter);
    const count = useSelector(selectFilteredTodosCount);
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    const handleToggle = useCallback((id) => {
        dispatch(toggleTodo(id));
    }, [dispatch]);

    const handleDelete = useCallback((id) => {
        dispatch(deleteTodo(id));
    }, [dispatch]);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-10">
            <h2 className="text-2xl font-bold mb-4">Todo List</h2>

            <div className="flex items-center gap-2 mb-4">
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className="flex-grow border px-3 py-2 rounded shadow-sm"
                    placeholder="What needs to be done?"
                />
                <button
                    onClick={handleAdd}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Add
                </button>
            </div>

            <div className="flex gap-3 mb-4">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => dispatch(setFilter(f))}
                        className={`px-3 py-1 rounded border ${filter === f ? 'bg-blue-500 text-white' : 'bg-gray-100'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <ul className="space-y-3 mb-4">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center p-3 border rounded shadow-sm"
                    >
                        <span
                            onClick={() => handleToggle(todo.id)}
                            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''
                                }`}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => handleDelete(todo.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <div className="text-right text-sm text-gray-500">
                {count} task{count !== 1 ? 's' : ''} {filter.toLowerCase()}
            </div>
        </div>
    );
};

export default TodoList;
