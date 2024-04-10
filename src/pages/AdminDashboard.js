import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto'; // import Chart
import NavBar from '../nav_bar/NavigationBar';

const AdminDashboard = () => {
    const chartRef = useRef(null); // Ref to hold the chart instance

    // Define maximum activity level per user
    const MAX_ACTIVITY_PER_USER = 1; // You can adjust this value

    // Function to generate random total users count
    const getTotalUsersCount = () => {
        return Math.floor(Math.random() * 1000 + 100); // Random total users count
    };

    // Function to calculate the number of active users
    const calculateActiveUsers = (totalUsersCount) => {
        // For simplicity, we can just take a fixed proportion of total users as active users
        const proportion = 0.2; // Adjust as needed
        return Math.floor(totalUsersCount * proportion);
    };

    // State for total users count
    const [totalUsersCount] = useState(getTotalUsersCount());

    // State for the number of active users
    const [activeUsers] = useState(calculateActiveUsers(totalUsersCount));

    // Function to generate random chart data based on total users count
    const generateChartData = (totalUsersCount) => {
        const data = [];
        for (let i = 0; i < 30; i++) {
            // Generate random data based on the total users count and maximum activity level
            const activity = Math.floor(Math.random() * totalUsersCount * MAX_ACTIVITY_PER_USER);
            data.push(activity);
        }
        return data;
    };

    // State for chart data
    const [chartData] = useState(generateChartData(totalUsersCount));

    // Effect to create the chart
    useEffect(() => {
        if (chartRef.current === null) {
            createChart(); // Create chart when component mounts
        }
    }, []); // Run only once on mount

    // Function to create the chart
    const createChart = () => {
        const ctx = document.getElementById('activeUsersChart').getContext('2d');
        chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({ length: 30 }, (_, i) => i + 1), // Labels for 30 days
                datasets: [{
                    label: 'Activity Level in the last 30 days',
                    data: chartData,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    return (
        <div>
            <NavBar/>
            <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">
                <div className="bg-white p-10 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">Admin Dashboard</h2>
                    <div className="mb-5">
                        <div className="flex justify-between mb-2">
                            <span className="font-bold text-gray-800">Total Users:</span>
                            <span className="text-gray-700">{totalUsersCount}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold text-gray-800">Active Users:</span>
                            <span className="text-gray-700">{activeUsers}</span>
                        </div>
                        <div style={{ overflowX: 'auto' }}>
                            <canvas id="activeUsersChart" width="400" height="200"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
