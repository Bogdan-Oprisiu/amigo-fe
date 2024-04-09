import React, {useState} from 'react';
import Message from './Message';

function MessageBox() {
    // State to hold messages
    const [messages, setMessages] = useState([]);
    // State to hold the current message being typed
    const [message, setMessage] = useState('');

    // Function to add a new message and its response
    const addMessage = (messageContent, sender) => {
        setMessages(prevMessages => [
            ...prevMessages,
            {content: messageContent, sender}
        ]);

        // Simple response mechanism, modify as needed
        const response = generateResponse(messageContent);
        setMessages(prevMessages => [
            ...prevMessages,
            {content: response, sender: "ChatBot"}
        ]);
    };

    // Function to generate a response based on user's message
    const generateResponse = (messageContent) => {
        // Simple response logic, you can expand this
        if (messageContent.toLowerCase().includes("hello")) {
            return "Hello there!";
        } else if (messageContent.toLowerCase().includes("how are you")) {
            return "I'm doing well, thank you!";
        } else {
            return "I'm sorry, I didn't understand that.";
        }
    };

    // Function to handle sending message
    const handleSendMessage = () => {
        addMessage(message, "You");
        setMessage(''); // Clear the message input after sending
    };

    return (
        <div className="flex flex-col h-full">
            <div className="overflow-y-auto flex-grow">
                {messages.map((message, index) => (
                    <Message key={index} content={message.content} sender={message.sender}/>
                ))}
            </div>
            <div className="flex items-center border-t border-gray-300">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message"
                    className="flex-grow p-2 resize-none focus:outline-none"
                />
                <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-blue-500 text-black font-semibold hover:bg-blue-600 focus:outline-none"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default MessageBox;