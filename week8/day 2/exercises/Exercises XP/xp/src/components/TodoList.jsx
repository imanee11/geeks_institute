import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions';

export default function TodoList() {
    
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <ul className="space-y-2">
            {todos.map(todo => (
                <li
                    key={todo.id}
                    className="flex justify-between items-center p-2 border rounded-md"
                >
                    <span
                        onClick={() => dispatch(toggleTodo(todo.id))}
                        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''
                            }`}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500 font-bold">
                        ✕
                    </button>
                </li>
            ))}
        </ul>
    );
}
