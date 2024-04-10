import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/auth_context/AuthProvider';

function NavBar() {
    const navigate = useNavigate();
    const {dispatch, auth} = useContext(AuthContext);

    const handleLogOut = () => {
        dispatch({type: 'LOGOUT', payload: {}});
        navigate('/Authentication');
    };

    // Placeholder function to get the profile picture URL
    const getProfilePicture = () => {
        // Here you can fetch the profile picture URL from the backend
        // For now, return a placeholder URL or use an SVG icon
        return 'https://via.placeholder.com/50'; // Placeholder URL
    };

    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <div className="flex items-center space-x-4">
                    <Link to="/Profile">
                        <img
                            src={getProfilePicture()} // Get profile picture URL
                            alt="Profile"
                            className="w-10 h-10 rounded-full"
                        />
                    </Link>
                    <button className="text-white font-semibold" onClick={() => navigate('/')}>Amigo</button>
                    <button className="text-white font-semibold" onClick={() => navigate('/Settings')}>Settings</button>
                    <button className="text-white font-semibold" onClick={() => navigate('/Profile')}>Profile</button>
                </div>
            </div>
            <button className="text-white font-semibold" onClick={handleLogOut}>Log Out</button>
        </nav>
    );
}

export default NavBar;
