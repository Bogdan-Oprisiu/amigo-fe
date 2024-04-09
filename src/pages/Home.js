import React from 'react';
import MessageBox from '../components/MessageBox';

function Home() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div className="overflow-y-auto flex-grow">
                <MessageBox />
            </div>
        </div>
    );
}

export default Home;
