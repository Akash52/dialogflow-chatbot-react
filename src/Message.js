import React from 'react'

const Message = ({ message }) => {
  return (
    <div className="messageCard">
      {message.isBot ? (
        <div className="botCard">
          {/* style */}
          {message.text}
        </div>
      ) : (
        <div className="userCard">
          {/* style */}
          {message.text}
        </div>
      )}
    </div>
  )
}

export default Message
