import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTodo, toggleTodo, deleteTodo, setFilter} from '../features/todos/todosSlice';
import { selectFilter, selectFilteredTodos } from '../features/todos/todoSelectors';

const filters = ['All', 'Active', 'Completed'];

export default function TodoList() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(selectFilteredTodos);
    const currentFilter = useSelector(selectFilter);

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>

            <div className="flex mb-4 gap-2">
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className="flex-grow px-3 py-2 border rounded shadow-sm"
                    placeholder="Add a new task..."
                />
                <button
                    onClick={handleAdd}
                    className="bg-red-400 hover:bg-red-300 text-white px-4 py-2 rounded"
                >
                    Add
                </button>
            </div>

            <div className="flex gap-2 mb-4">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => dispatch(setFilter(f))}
                        className={`px-3 py-1 rounded ${currentFilter === f ? 'bg-green-400 text-white' : 'bg-gray-200'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <ul className="space-y-2">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between p-3 border rounded"
                    >
                        <span
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''
                                }`}
                        >
                            {todo.title}
                        </span>
                        <button
                            onClick={() => dispatch(deleteTodo(todo.id))}
                            className="text-red-500 hover:text-red-700"
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
