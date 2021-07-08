import React from 'react'
import Message from './Message'

const Messages = ({ messages }) => {
  return (
    <div className="messagesSection">
      {messages.map((message) => {
        return (
          <div className="messagesContainer">
            <Message message={message} scrollToBottom />
          </div>
        )
      })}
    </div>
  )
}

export default Messages
