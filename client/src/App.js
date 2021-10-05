import React from 'react'
import Chat from './Chat'

const App = () => {
  return (
    <>
      <div className="flex justify-end mx-10  px-3">
        <span className="text-md font-extrabold tracking-tight text-gray-100 sm:text-3xl ">
          Trip planner chatbot
        </span>
      </div>
      <Chat />
    </>
  )
}

export default App
