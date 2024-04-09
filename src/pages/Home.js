import React from 'react';
import MessageBox from '../components/MessageBox';
import NavBar from "../nav_bar/NavigationBar";

function Home() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <NavBar />
            <div className="flex-grow">
                <MessageBox />
            </div>
        </div>
    );
}

export default Home;
