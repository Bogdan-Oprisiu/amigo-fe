import React, {useState, useContext} from "react";
import { AuthContext } from '../context/auth_context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SignUp = ({verifyData}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Signing up with:', { username, email, password });

        const user = verifyData(username, password);
        if (user) {
            dispatch({ type: 'SIGN UP', payload: { user: { ...user, email } } });
            navigate('/');
        } else {
            // Handle invalid data
            console.log('Invalid data');
        }
    };

    return (
        <form>
            <div className="mb-4">
                <p className="block text-gray-700 text-sm font-bold mb-2">Username</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div className="mb-4">
                <p className="block text-gray-700 text-sm font-bold mb-2">Email</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="email" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <p className="block text-gray-700 text-sm font-bold mb-2">Password</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    type="password" 
                    placeholder="******"
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
    );
};

export default SignUp;
