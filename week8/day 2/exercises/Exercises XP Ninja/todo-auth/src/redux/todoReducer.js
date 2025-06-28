import { ADD_TODO, DELETE_TODO } from './todoActions';

const initialState = { todos: [] };

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload] };

        case DELETE_TODO:
            return { todos: state.todos.filter((_, i) => i !== action.payload) };
            
        default:
            return state;
    }
}
