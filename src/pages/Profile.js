import React, { useState, useEffect } from 'react';
import NavBar from "../nav_bar/NavigationBar";

const Profile = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = () => {
        // Simulate API call with setTimeout
        setTimeout(() => {
            // Mock user data
            const userData = {
                email: 'example@example.com',
                username: 'example_user'
            };

            // Set state with fetched user data
            setEmail(userData.email);
            setUsername(userData.username);
        }, 100);
    };

    return (
        <div>
            <NavBar/>
            <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">
                <div className="bg-white p-10 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">Profile Page</h2>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 font-bold text-gray-800">Email</label>
                        <p className="text-gray-700 shadow-lg border border-gray-300 rounded-lg p-2">{email}</p>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="username" className="block mb-2 font-bold text-gray-800">Username</label>
                        <p className="text-gray-700 shadow-lg border border-gray-300 rounded-lg p-2">{username}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;