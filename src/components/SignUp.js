import React, {useState, useContext} from "react";
import { AuthContext } from '../context/auth_context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'; // Icons for visual feedback

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Importing eye icons for visibility toggle


const SignUp = ({verifyData, handleToggleForm}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [passwordValidation, setPasswordValidation] = useState({
        minLength: false,
        digit: false,
        lowercase: false,
        uppercase: false,
        specialChar: false,
        noSpaces: true, // Default to true since empty password does not contain spaces
    });
    const [showPolicy, setShowPolicy] = useState(false); // New state to manage visibility of password policy hints
    const [isBlurring, setIsBlurring] = useState(false); // New state to manage blur effect
    const [validationError, setValidationError] = useState('');
    const [showToast, setShowToast] = useState(false); // Toast visibility state
    const [showValidationError, setShowValidationError] = useState(false);
    const [showToastFade, setShowToastFade] = useState(false); // New state to manage fade effect




    const policyDescriptions = {
        minLength: "at least 8 characters",
        digit: "at least one digit",
        lowercase: "at least one lowercase letter",
        uppercase: "at least one uppercase letter",
        specialChar: "at least one special character (@#$%^&+=)",
        noSpaces: "no spaces",
    };




    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value);
        setPasswordValidation(validatePassword(value));
    };


    const handleShowToast = () => {
        setShowToast(true);
        setShowToastFade(true); // Initiate showing with fade effect
        setTimeout(() => {
            setShowToastFade(false); // Start fade-out effect
        }, 2500); // Start fading out before completely hiding to see the effect
        setTimeout(() => {
            setShowToast(false); // Completely hide after fade-out
        }, 3000); // Ensure this matches the duration of your fade-out transition
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const allCriteriaMet = Object.values(passwordValidation).every(Boolean);

        if (!allCriteriaMet) {
            handleShowToast(); // Use the new function to show the toast
            return;
        }

        // Proceed with user creation if validation passes
        // Reset the validation error states if criteria are met
        setShowValidationError(false);
        setShowToast(false);
        const user = verifyData(username, password);
        if (user) {
            dispatch({ type: 'SIGN_UP', payload: { user: { ...user, email } } });
            navigate('/');
        } else {
            console.log('Invalid data');
        }
    };

    const toastStyle = {
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(220, 38, 38, 0.85)",
        color: "white",
        padding: "8px 16px",
        borderRadius: "8px",
        visibility: showToast ? "visible" : "hidden",
        opacity: showToastFade ? 1 : 0,
        transition: "opacity 0.5s, visibility 0.5s ease 0.5s",
    };



    const validatePassword = (password) => {
        return {
            minLength: password.length >= 8,
            digit: /[0-9]/.test(password),
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            specialChar: /[@#$%^&+=]/.test(password),
            noSpaces: !/\s/.test(password),
        };
    };


    const toggleShowPassword = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent the focus from shifting
        setShowPassword(!showPassword);
    };

    const handleFocus = () => {
        setShowPolicy(true);
        setIsBlurring(false); // Reset blurring effect on focus
    };

    const handleBlur = () => {
        setIsBlurring(true); // Initiate blurring effect
        setTimeout(() => {
            setShowPolicy(false); // Hide the policy hints after the fade-out animation completes
        }, 500); // Adjust timing to match the duration of your fade-out animation
    };


    return (
        <div className="flex h-screen  items-center justify-center mx-auto">
            <form className="bg-white p-10 rounded-lg shadow-lg mx-auto">
                <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">Sign Up</h2>
                <div className="mb-5">
                    <label htmlFor="username" className="block mb-2 font-bold text-gray-500">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 font-bold text-gray-500">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5 relative">
                    <label htmlFor="password" className="block mb-2 font-bold text-gray-500">Password</label>
                    <div className="flex items-center border rounded-lg">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Password"
                            className="w-full rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none"
                            onChange={handlePasswordChange}
                            onFocus={handleFocus} // Bind the onFocus event
                            onBlur={handleBlur} // Bind the onBlur event
                        />
                        <button
                            onMouseDown={toggleShowPassword}
                            className="p-2 cursor-pointer focus:outline-none">
                            {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                        </button>
                    </div>

                    {showToast && (
                        <div style={toastStyle}>
                            Password does not meet all requirements.
                        </div>
                    )}

                    {/* Conditional rendering based on showPolicy state */}
                    {showPolicy && (
                        <div
                            className={`absolute right-[-320px] top-0 bg-white p-4 shadow-lg rounded-lg w-80 mt-2 z-10 transition-opacity duration-500 ${isBlurring ? 'opacity-0' : 'opacity-100'}`}>
                            <p className="font-semibold mb-2">Password must include:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                {Object.entries(passwordValidation).map(([key, isValid]) => (
                                    <li key={key}
                                        className={`flex items-center gap-2 ${isValid ? 'text-green-500' : 'text-red-500'}`}>
                                        {isValid ? <FiCheckCircle/> : <FiXCircle/>}
                                        <span>{policyDescriptions[key]}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}


                </div>


                <button
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSubmit}>
                    Sign Up
                </button>

                <button
                    onClick={handleToggleForm}
                    className="mt-4 text-sm text-green-500 hover:text-green-700 font-semibold">
                    Already have an account? Log In
                </button>

                {/*/!* Toast Notification *!/*/}
                {/*{showValidationError && (*/}
                {/*    <div style={toastStyle}>*/}
                {/*        Password does not meet all requirements.*/}
                {/*    </div>*/}
                {/*)}*/}

            </form>
        </div>

    );
};

export default SignUp;
