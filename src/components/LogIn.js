import React, { useState, useContext } from "react";
import { AuthContext } from '../context/auth_context/AuthProvider';
import { useNavigate } from 'react-router-dom';

// Ensure props are correctly structured to receive both verifyData and handleToggleForm
const LogIn = ({ verifyData, handleToggleForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = verifyData(username, password);
        if (user) {
            dispatch({ type: 'LOGIN', payload: { user } });
            navigate('/');
        } else {
            console.log('Invalid data');
        }
    };

    return (
        <div className="flex h-screen  items-center justify-center, mx-auto">
            <form className="bg-white p-10 rounded-lg shadow-lg, mx-auto">
                <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">Log In</h2>
                <div className="mb-5">
                    <label htmlFor="username" className="block mb-2 font-bold text-gray-500">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 font-bold text-gray-500">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="******"
                        className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col items-center">
                    <button
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline mb-3"
                        type="button"
                        onClick={handleSubmit}>
                        Log In
                    </button>
                    <a href="#"
                       className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Forgot Password?
                    </a>
                    <button
                        onClick={handleToggleForm}
                        className="mt-4 text-sm text-blue-500 hover:text-blue-700 font-semibold">
                        Don't have an account? Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;



