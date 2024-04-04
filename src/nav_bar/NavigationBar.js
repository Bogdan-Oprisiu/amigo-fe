import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    return (
        <nav>
            <button onClick={() => navigate('/Authentication')}>Log Out</button>
            <button onClick={() => navigate('/Home')}>Home</button>
            <button onClick={() => navigate('/Settings')}>Settings</button>
            <button onClick={() => navigate('/Profile')}>Profile</button>
        </nav>
    );
}

export default NavBar;