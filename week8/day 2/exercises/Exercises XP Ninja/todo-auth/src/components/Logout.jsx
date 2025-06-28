import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authActions';

export default function Logout() {
    const dispatch = useDispatch();
    return (
        <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => dispatch(logout())}
        >
            Logout
        </button>
    );
}
