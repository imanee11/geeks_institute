import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/authSlice';


const Login = () => {

    const dispatch = useDispatch();
    const [username , setUsername] = useState('');

    const handleLogin = () => {
        if (username.trim()) {
            dispatch(loginUser({name : username}))
        }
    }

    return (
        <div className="p-4 bg-white shadow rounded max-w-sm mx-auto ">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input className="border px-4 py-2 w-full rounded mb-4" type="text" placeholder='enter ur name' value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleLogin} className="bg-red-400 text-white px-4 py-2 rounded w-full hover:bg-red-300">Login</button>
        </div>
    );
};

export default Login;