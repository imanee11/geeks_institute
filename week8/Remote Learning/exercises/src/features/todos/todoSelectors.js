import { createSelector } from '@reduxjs/toolkit';

const selectTodosState = state => state.todos;

export const selectFilter = createSelector(
    [selectTodosState],
    (todosState) => todosState.filter
);

export const selectFilteredTodos = createSelector(
    [selectTodosState],
    (todosState) => {
        const { items, filter } = todosState;
        if (filter === 'Active') return items.filter(todo => !todo.completed);
        if (filter === 'Completed') return items.filter(todo => todo.completed);
        return items;
    }
);
