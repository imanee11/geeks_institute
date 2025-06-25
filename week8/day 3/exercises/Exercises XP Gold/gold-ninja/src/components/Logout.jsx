import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/authSlice';

const Logout = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="p-4 bg-white shadow rounded max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-4">Welcome, {user?.name}!</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600" onClick={() => dispatch(logoutUser())}>Logout</button>

        </div>
    );
};

export default Logout;