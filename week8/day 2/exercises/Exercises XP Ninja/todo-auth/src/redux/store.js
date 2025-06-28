import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import todoReducer from './todoReducer';


const store = createStore(
    combineReducers({
        auth : authReducer,
        todos : todoReducer,
    })
);

export default store;