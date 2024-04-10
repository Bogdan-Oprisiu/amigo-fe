import React, {useState} from 'react';
import NavBar from "../nav_bar/NavigationBar";
import {Link} from 'react-router-dom';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.files[0]);
    };

    const handleUpdateProfile = () => {
        // Here you can implement the logic to update the user's profile
        // For example, you can send a request to your backend API to update the email, username, and profile picture
        console.log("Updated email:", email);
        console.log("Updated username:", username);
        console.log("Updated profile picture:", profilePicture);
    };

    return (
        <div>
            <NavBar/>
            <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">

                <div className="bg-white p-10 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">Profile Page</h2>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 font-bold text-gray-800">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your new email"
                            value={email}
                            onChange={handleChangeEmail}
                            className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="username" className="block mb-2 font-bold text-gray-800">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your new username"
                            value={username}
                            onChange={handleChangeUsername}
                            className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="profilePicture" className="block mb-2 font-bold text-gray-800">Profile
                            Picture</label>
                        <input
                            type="file"
                            id="profilePicture"
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                            className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleUpdateProfile}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
                        >
                            Update Profile
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
                </div>
            </div>
        </div>
    );
};

export default Profile;
