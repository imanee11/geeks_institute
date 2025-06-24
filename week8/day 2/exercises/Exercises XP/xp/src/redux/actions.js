export const add = 'add';
export const toggle = 'toggle';
export const remove = 'remove';

export const addTodo = (text) => ({
    type: add,
    payload: text,
});

export const toggleTodo = (id) => ({
    type: toggle,
    payload: id,
});

export const removeTodo = (id) => ({
    type: remove,
    payload: id,
});