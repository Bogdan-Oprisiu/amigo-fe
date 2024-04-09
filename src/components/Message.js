import React from 'react';

function Message({ content, sender }) {
    return (
        <div className="p-4 border rounded-md bg-turquoise-200 my-2 mx-2 md:mx-auto max-w-md">
            <p className="font-semibold">{sender}</p>
            <p className="break-words">{content}</p>
        </div>
    );
}

export default Message;
