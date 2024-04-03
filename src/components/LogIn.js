import React from "react";

const LogIn = () => {
    return (
        <form>
            <div className="mb-4">
                <p className="block text-gray-700 text-sm font-bold mb-2">Username</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
                <p className="block text-gray-700 text-sm font-bold mb-2">Password</p>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******" />
            </div>
        </form>
    );
};

export default LogIn;
