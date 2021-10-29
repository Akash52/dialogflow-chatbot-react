import React, { useState } from 'react'
import axios from 'axios'
import Messages from './Messages'

const Chat = () => {
  const [responses, setResponses] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')

  const handleMessageSubmit = (message) => {
    const data = {
      message,
    }

    axios
      .post('"YOUR-BACK-END-URL"', data)
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
    if (event.key === 'Enter' && event.target.value !== '') {
      setResponses((responses) => [...responses, message])
      handleMessageSubmit(message.text)
      setCurrentMessage('')
    }
  }

  return (
    <>
      <div className="flex justify-end  px-3  mx-auto">
        <div className="max-w-xs lg:max-w-md  bg-gray-100  dark:bg-gray-900  flex justify-between flex-col  w-full h-auto py-4  shadow-sm rounded-xl my-2">
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

          <div className="flex justify-center  px-3 py-2   border-t-2 border-gray-200 dark:border-gray-600  ">
            <div className="py-2 px-2  bg-white dark:bg-gray-800 lg:max-w-lg  w-full   shadow-sm rounded-lg ">
              <input
                type="text"
                value={currentMessage}
                onChange={handleMessageChange}
                onKeyDown={handleSubmit}
                placeholder="Enter your message here"
                className="block w-full  bg-white  dark:bg-gray-700 border border-gray-300 dark:border-gray-900  rounded-md py-2 pl-3 pr-3 text-sm placeholder-gray-500 dark:text-white dark:placeholder-gray-100 focus:outline-none focus:text-gray-900 dark:focus:text-white focus:placeholder-gray-400 dark:focus:placeholder-white focus:ring-1 focus:ring-indigo-300  sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
