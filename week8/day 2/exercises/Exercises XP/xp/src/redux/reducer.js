import { add, toggle, remove } from "./actions";

const initialState = {
    todos: []
}

let nextId = 1;

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case add:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: nextId++, text: action.payload, completed: false }
                ],
            };

        case toggle:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload
                    ? {...todo, completed : !todo.completed}
                    : todo
                )
            };

        case remove:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };

        default:
            return state;
    }
}