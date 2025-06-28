import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../features/auth/authSlice'

export default function AuthForm() {
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const handleLogin = () => {
        if (username.trim()) {
            dispatch(login({ name: username }))
        }
    }

    const handleLogout = () => {
        dispatch(logout())
        setUsername('')
    }

    return (
        <div className="p-4 bg-white rounded shadow mb-4">
            {isAuthenticated ? (
                <>
                    <p className="mb-2 text-green-600">Logged in as <strong>{username}</strong></p>
                    <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <input
                        className="border px-2 py-1 mr-2"
                        placeholder="Enter name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={handleLogin}>Login</button>
                </>
            )}
        </div>
    )
}
