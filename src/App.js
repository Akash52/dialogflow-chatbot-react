import React from 'react'
import Chat from './Chat'

const App = () => {
  return (
    <div>
      <div className="flex justify-center  px-3">
        <span className="text-xl font-extrabold tracking-tight animate-pulse text-gray-100 sm:text-5xl ">
          Dialogflow Chatbot
        </span>
      </div>
      <Chat />
    </div>
  )
}

export default App
