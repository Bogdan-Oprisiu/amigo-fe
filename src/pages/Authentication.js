import React, { useState } from 'react';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';

const Authentication = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div>
            <h1>{isSignUp ? 'Sign Up' : 'Log In'}</h1>
            {isSignUp ? (
                <SignUp/>
            ) : (
                <LogIn/>
            )}
            <button onClick={handleToggleForm}>
                {isSignUp ? 'Already have an account? Log In' : 'Don\'t have an account? Sign Up'}
            </button>
        </div>
    );
};

export default Authentication;