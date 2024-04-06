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
        <nav>
            <button onClick={handleLogOut}>Log Out</button>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/Settings')}>Settings</button>
            <button onClick={() => navigate('/Profile')}>Profile</button>
        </nav>
    );
}

export default NavBar;