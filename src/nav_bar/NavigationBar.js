import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth_context/AuthProvider';

function NavBar() {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogOut = () => {
        dispatch({ type: 'LOGOUT' , payload: {}});
        navigate('/Authentication');
    };

    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <div className="flex items-center space-x-4">
                    <button className="text-white font-semibold" onClick={() => navigate('/')}>Home</button>
                    <button className="text-white font-semibold" onClick={() => navigate('/Settings')}>Settings</button>
                    <button className="text-white font-semibold" onClick={() => navigate('/Profile')}>Profile</button>
                </div>
            </div>
            <button className="text-white font-semibold" onClick={handleLogOut}>Log Out</button>
        </nav>
    );
}

export default NavBar;
