import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';


const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div>
            <ul className="w-full max-w-md space-y-2">
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;