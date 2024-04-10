import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const {search} = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(search);
        const tokenParam = params.get('token');
        if (!tokenParam) {
            console.error('Token is missing');
            navigate('/login'); // Redirect if no token is found
            return;
        }
        setToken(tokenParam);
        // Optionally, validate the token here and handle invalid tokens
    }, [navigate, search]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Substitute your backend endpoint here
            await axios.post('https://localhost:8443/api/auth/reset-password', {
                token,
                newPassword
            });
            alert('Password reset successfully');
            navigate('/login');
        } catch (error) {
            console.error('Error resetting password:', error);
            alert('Failed to reset password');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;
