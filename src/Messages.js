import React, { useEffect, useRef } from "react";
import Message from './Message'

const Messages = ({ messages}) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages]);

    return (
        <div className="messages">
            {messages.map((message, i) => <div key={i}><Message message={message} /></div>)}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default Messages


// https://stackoverflow.com/questions/64120913/could-not-find-a-declaration-file-for-module-react-scroll-to-bottom