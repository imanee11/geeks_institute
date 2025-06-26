import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/todoSlice';

export default function CategoryList() {
    const categories = useSelector((state) => state.todos.categories);
    const dispatch = useDispatch();

    return (
        <div>
            {Object.entries(categories).map(([catName, todos]) => (
                <div key={catName} className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{catName}</h2>
                    {todos.length === 0 && <p className="text-gray-500">No todos yet.</p>}
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id} className="flex justify-between items-center mb-2 p-2 bg-white rounded shadow">
                                <span
                                    className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
                                    onClick={() => dispatch(toggleTodo({ category: catName, id: todo.id }))}
                                >
                                    {todo.text}
                                </span>
                                <button
                                    className="text-red-500 hover:underline ml-4"
                                    onClick={() => dispatch(removeTodo({ category: catName, id: todo.id }))}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
