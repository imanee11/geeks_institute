import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../todoSlice';

const TodoItem = ({ todo }) => {

    const dispatch = useDispatch();

    return (
        <div>
            <li className="flex items-center justify-between bg-white p-2 rounded shadow mb-2">
                <span 
                    className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`} 
                    onClick={() => dispatch(toggleTodo(todo.id))}>
                    {todo.text}
                </span>
                <button className="text-red-500 hover:text-red-700" onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
            </li>

        </div>
    );
};

export default TodoItem;