import React, {useState, useContext} from "react";
import { AuthContext } from '../context/auth_context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SignUp = ({verifyData, handleToggleForm}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Signing up with:', { username, email, password });

        const user = verifyData(username, password);
        if (user) {
            dispatch({ type: 'SIGN UP', payload: { user: { ...user, email } } });
            navigate('/');
        } else {
            // Handle invalid data
            console.log('Invalid data');
        }
    };

    return (
        <div className="flex h-screen  items-center justify-center mx-auto">
            <form className="bg-white p-10 rounded-lg shadow-lg mx-auto">
                <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">Sign Up</h2>
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
                    <label htmlFor="email" className="block mb-2 font-bold text-gray-500">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 font-bold text-gray-500">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}>
                    Sign Up
                </button>

                <button
                    onClick={handleToggleForm}
                    className="mt-4 text-sm text-green-500 hover:text-green-700 font-semibold">
                    Already have an account? Log In
                </button>

            </form>
        </div>

    );
};

export default SignUp;
