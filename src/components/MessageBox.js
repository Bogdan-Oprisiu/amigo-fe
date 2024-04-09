import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';

function MessageBox() {
    // State to hold messages
    const [messages, setMessages] = useState([]);
    // State to hold the current message being typed
    const [message, setMessage] = useState('');

    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const parentHeight = containerRef.current.parentElement.clientHeight;
            const calculatedHeight = parentHeight * 0.86; // Adjust this value as needed
            containerRef.current.style.maxHeight = `${calculatedHeight}px`;
        }
        scrollToBottom();
    }, [messages]);

    // Function to scroll to the bottom of the message container
    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

    // Function to add a new message and its response
    const addMessage = (messageContent, sender) => {
        setMessages(prevMessages => [
            ...prevMessages,
            { content: messageContent, sender }
        ]);

        // Simple response mechanism, modify as needed
        const response = generateResponse(messageContent);
        setMessages(prevMessages => [
            ...prevMessages,
            { content: response, sender: "ChatBot" }
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
        <div className="flex justify-center items-center h-full">
            <div className="max-w-xs md:max-w-xl lg:max-w-3xl bg-gray-200 rounded-lg shadow-lg flex flex-col h-full">
                <div ref={containerRef} className="overflow-y-auto p-2 flex-grow">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}>
                            <Message content={message.content} sender={message.sender} />
                        </div>
                    ))}
                    {messages.length === 0 && (
                        <div className="flex justify-center items-center flex-grow">
                            <p className="text-gray-500">No messages yet.</p>
                        </div>
                    )}
                </div>
                <div className="border-t border-gray-300 p-2 flex items-center justify-end">
                    <div className="flex-grow overflow-hidden mr-2">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message"
                            className="w-full p-2 resize-none focus:outline-none rounded-lg border-2 border-gray-300"
                        />
                    </div>
                    <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-blue-500 text-black font-semibold hover:bg-blue-600 focus:outline-none rounded-lg"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MessageBox;
