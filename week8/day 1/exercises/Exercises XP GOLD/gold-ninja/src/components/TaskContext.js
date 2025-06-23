import React, { createContext, useReducer } from 'react';

// Create context
export const TaskContext = createContext();

// Reducer function
const taskReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            if (!action.payload.trim()) return state;
            return [
                ...state,
                { id: Date.now(), text: action.payload.trim(), completed: false },
            ];
        case 'toggle':
            return state.map(task =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            );
        case 'remove':
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
};

// Provider component
export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};
