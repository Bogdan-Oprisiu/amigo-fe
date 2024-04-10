import React, { useEffect, useState } from 'react';
import NavBar from '../nav_bar/NavigationBar';

const AdminDashboard = () => {
    const getUsersCount = () => {
        return Math.floor(Math.random() * 1000); // Return a random number between 0 and 999
    };

    const [userCount, setUserCount] = useState(getUsersCount());

    useEffect(() => {
        // Fetch user count from the backend or any other source
        const fetchUserCount = async () => {
            try {
                const count = await getUsersCount(); // Replace with actual API call
                setUserCount(count);
            } catch (error) {
                console.error('Failed to fetch user count:', error);
            }
        };

        fetchUserCount();

        const interval = setInterval(fetchUserCount, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <NavBar />
            <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">
                <div className="bg-white p-10 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">Admin Dashboard</h2>
                    <div className="mb-5">
                        <label htmlFor="userCount" className="block mb-2 font-bold text-gray-800">Number of Users</label>
                        <p className="text-gray-700 shadow-lg border border-gray-300 rounded-lg p-2">{userCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
