import { LOGIN, REGISTER, LOGOUT } from './authActions';

const initialState = { isAuthenticated: false, user: null };

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
        case REGISTER:
            return { isAuthenticated: true, user: action.payload };
        
        case LOGOUT:
            return initialState;
            
        default:
            return state;
    }
}
