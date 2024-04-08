import React, { useState } from 'react';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';

const Authentication = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    function verifyData(username, password) {
        if (username && password) {
            return { username, password };
        } else {
            return null;
        }
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">
            {isSignUp ? (
                <SignUp verifyData={verifyData}/>
            ) : (
                <LogIn verifyData={verifyData} handleToggleForm={handleToggleForm} />
            )}
        </div>
    );
};

export default Authentication;
