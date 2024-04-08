import React, { useState, useContext } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { AuthContext } from '../context/auth_context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ verifyData, handleToggleForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


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

    const toggleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
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
                <div className="mb-5 relative">
                    <label htmlFor="password" className="block mb-2 font-bold text-gray-500">Password</label>
                    <div className="flex items-center border rounded-lg">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="******"
                            className="w-full rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onMouseDown={toggleShowPassword}
                            className="p-2 cursor-pointer focus:outline-none">
                            {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                        </button>
                    </div>
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



