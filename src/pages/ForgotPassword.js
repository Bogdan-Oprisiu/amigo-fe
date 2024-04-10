import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'; // Import Link

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a request to your backend to initiate the password reset process
            // For example, you might use an API endpoint like '/api/forgot-password'
            // Pass the email entered by the user as part of the request
            // If the request is successful, update state to show a success message
            setIsEmailSent(true);
        } catch (error) {
            // If an error occurs, update state to display an error message to the user
            setErrorMessage('Failed to send password reset email. Please try again.');
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-green-500">
            <form className="bg-white p-10 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">Forgot Password</h2>
                {!isEmailSent ? (
                    <>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 font-bold text-gray-500">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Send Reset Email
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-700 mb-3">An email with instructions to reset your password has been
                            sent to {email}.</p>
                        {/* Use a Link component to navigate to the authentication page */}
                        <Link
                            to="/authentication"
                            className="text-blue-500 hover:text-blue-700 font-semibold"
                        >
                            Return to Log In
                        </Link>
                    </div>
                )}
                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default ForgotPassword;
