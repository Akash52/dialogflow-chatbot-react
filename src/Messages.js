import React, { useEffect, useRef } from 'react'
import Message from './Message'

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(scrollToBottom, [messages])

  return (
    <div>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} />
        </div>
      ))}

      <div ref={messagesEndRef} />
    </div>
  )
}

export default Messages
