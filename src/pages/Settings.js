import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NavBar from "../nav_bar/NavigationBar"; // Import Link

const Settings = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        try {
            await axios.post('https://localhost:8443/api/auth/forgot-password', {email});
            alert('If an account with that email was found, we sent a link to reset your password.');
        } catch (error) {
            console.error('Failed to initiate password reset:', error);
            alert('Failed to initiate password reset. Please try again.');
        }
    };

    return (
        <div>
            <NavBar/>
            <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">
                <form className="bg-white p-10 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">Settings</h2>
                    <div className="mb-5">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleForgotPassword}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
                        >
                            Send Reset Password Email
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        <Link
                            to="/"
                            className="text-blue-500 hover:text-blue-700 font-semibold"
                        >
                            Back to Home
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Settings;
