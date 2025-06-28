import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/todoActions';

export default function TodoList() {
    const [text, setText] = useState('');
    const todos = useSelector(state => state.todos.todos);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    return (
        <div className="bg-white p-6 rounded shadow w-full max-w-md">
            <h2 className="text-lg font-bold mb-2">Hello, {user}</h2>
            <div className="flex gap-2 mb-4">
                <input
                    className="flex-1 p-2 border rounded"
                    placeholder="New todo"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button
                    className="bg-green-500 text-white px-4 rounded"
                    onClick={() => text && (dispatch(addTodo(text)), setText(''))}
                >
                    Add
                </button>
            </div>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i} className="flex justify-between items-center mb-2">
                        <span>{todo}</span>
                        <button
                            className="text-red-500"
                            onClick={() => dispatch(deleteTodo(i))}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
