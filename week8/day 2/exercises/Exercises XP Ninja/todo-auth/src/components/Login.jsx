import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authActions';

export default function Login() {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    return (
        <div className="bg-white p-6 rounded shadow mb-4">
            <h2 className="text-lg mb-2">Login</h2>
            <input
                className="w-full mb-2 p-2 border rounded"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button
                className="w-full bg-blue-500 text-white py-2 rounded"
                onClick={() => email && dispatch(login(email))}
            >
                Login
            </button>
        </div>
    );
}
