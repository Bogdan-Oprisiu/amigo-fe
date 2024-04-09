import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        try {
            await axios.post('https://localhost:8443/api/auth/forgot-password', { email });
            alert('If an account with that email was found, we sent a link to reset your password.');
        } catch (error) {
            console.error('Failed to initiate password reset:', error);
            alert('Failed to initiate password reset. Please try again.');
        }
    };

    return (
        <div>
            <h1>Settings</h1>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleForgotPassword}>Send Reset Password Email</button>
        </div>
    );
};

export default Settings;
