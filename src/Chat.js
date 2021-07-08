import React, { useState } from 'react'
import axios from 'axios'
import Messages from './Messages'

const Chat = (props) => {
  const [responses, setResponses] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')

  const handleMessageSubmit = (message) => {
    const data = {
      message,
    }

    axios
      .post('https://jokesbotserver.herokuapp.com/chatbot', data)
      .then((response) => {
        const responseData = {
          text:
            response.data['message']['fulfillmentText'] !== ''
              ? response.data['message']['fulfillmentText']
              : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true,
        }
        setResponses((responses) => [...responses, responseData])
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  }

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false,
    }
    if (event.key === 'Enter') {
      setResponses((responses) => [...responses, message])
      handleMessageSubmit(message.text)
      setCurrentMessage('')
    }
  }

  return (
    <>
    <div className="flex justify-center  px-3  mx-auto">
    
      <div className="max-w-md md:max-w-lg bg-gray-100  flex justify-between flex-col  h-full   w-full py-4  shadow-sm rounded-xl my-2">
      
        <div
          className="messagesSection flex flex-col
          space-y-4
          p-3
          overflow-y-auto
          scrollbar-thumb-blue
          scrollbar-thumb-rounded
          scrollbar-track-blue-lighter
          scrollbar-w-2
          scrolling-touch"
        >
          <Messages messages={responses} />

          </div>

          <div className="flex justify-center  px-3 py-2   border-t-2 border-gray-200  ">
            <div className="py-2 px-2  bg-white lg:max-w-lg  w-full   shadow-sm rounded-lg ">
              <input
                type="text"
                value={currentMessage}
                onChange={handleMessageChange}
                onKeyDown={handleSubmit}
                placeholder="Enter your message here"
                className="block w-full  bg-white border border-gray-300  rounded-md py-2 pl-3 pr-3 text-sm placeholder-gray-500 dark:placeholder-gray-100 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 dark:focus:placeholder-white focus:ring-1 focus:ring-indigo-300  sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      </>
      
      
    
  )
}

export default Chat
