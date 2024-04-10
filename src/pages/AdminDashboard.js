import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto'; // import Chart
import NavBar from '../nav_bar/NavigationBar';

const AdminDashboard = () => {
    const chartRefActiveUsers = useRef(null); // Ref to hold the active users chart instance
    const chartRefTotalTimeSpent = useRef(null); // Ref to hold the total time spent chart instance

    // Define maximum activity level per user and maximum time spent per user
    const MAX_ACTIVITY_PER_USER = 1; // You can adjust this value
    const HOURS_IN_A_DAY = 24;

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

    // Function to generate random chart data based on total users count
    const generateChartData = (totalUsersCount) => {
        const data = [];
        for (let i = 0; i < 30; i++) {
            // Generate random data based on the total users count and maximum activity level
            const activity = Math.floor(Math.random() * totalUsersCount * MAX_ACTIVITY_PER_USER * 0.5); // Adjusted multiplier
            data.push(activity);
        }
        return data;
    };

    // Function to calculate the total time spent by all users combined for each day in the last 30 days
    const calculateTotalTimePerDay = (chartData) => {
        return chartData.map(activity => Math.round(activity / MAX_ACTIVITY_PER_USER * HOURS_IN_A_DAY * 0.8)); // Adjusted multiplier
    };

    // Function to calculate the total time spent by all users combined over the last 30 days
    const calculateTotalTimeSpent = (totalTimePerDay) => {
        return totalTimePerDay.reduce((total, time) => total + time, 0);
    };

    // State for total users count
    const [totalUsersCount] = useState(getTotalUsersCount());

    // State for the number of active users
    const [activeUsers] = useState(calculateActiveUsers(totalUsersCount));

    // State for chart data
    const [chartData] = useState(generateChartData(totalUsersCount));

    // State for total time spent by all users combined for each day in the last 30 days
    const [totalTimePerDay] = useState(calculateTotalTimePerDay(chartData));

    // State for total time spent by all users combined over the last 30 days
    const [totalTimeSpent] = useState(calculateTotalTimeSpent(totalTimePerDay));

    // Effect to create the active users chart
    useEffect(() => {
        if (chartRefActiveUsers.current === null) {
            createActiveUsersChart(); // Create active users chart when component mounts
        }
    }, []); // Run only once on mount

    // Effect to create the total time spent chart
    useEffect(() => {
        if (chartRefTotalTimeSpent.current === null) {
            createTotalTimeSpentChart(); // Create total time spent chart when component mounts
        }
    }, []); // Run only once on mount

    // Function to create the active users chart
    const createActiveUsersChart = () => {
        const ctx = document.getElementById('activeUsersChart').getContext('2d');
        chartRefActiveUsers.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({ length: 30 }, (_, i) => i + 1), // Labels for 30 days
                datasets: [{
                    label: 'Active Users Each Day',
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
                        beginAtZero: true,
                        stepSize: 1 // Ensure integer ticks
                    }
                }
            }
        });
    };

    // Function to create the total time spent chart
    const createTotalTimeSpentChart = () => {
        const ctx = document.getElementById('totalTimeSpentChart').getContext('2d');
        chartRefTotalTimeSpent.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({ length: 30 }, (_, i) => i + 1), // Labels for 30 days
                datasets: [{
                    label: 'Total Time Spent Each Day (hours)',
                    data: totalTimePerDay,
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        stepSize: 1 // Ensure integer ticks
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
                        <div className="flex justify-between mb-2">
                            <span className="font-bold text-gray-800">Total Time Spent (last 30 days):</span>
                            <span className="text-gray-700">{totalTimeSpent} hours</span>
                        </div>
                        <div className="mb-4" style={{ overflowX: 'auto' }}>
                            <canvas id="activeUsersChart" width="400" height="200"></canvas>
                        </div>
                        <div style={{ overflowX: 'auto' }}>
                            <canvas id="totalTimeSpentChart" width="400" height="200"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
