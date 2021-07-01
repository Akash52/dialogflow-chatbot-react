import React from 'react'

const Message = ({ message }) => {
  return (
    <div>
      {message.isBot ? (
        <div className="flex items-end">
          <div
            className="
                flex flex-col
                space-y-2
                text-md
                max-w-xs
                mx-2
                order-2
                items-start
                shadow-md
                rounded-lg
               
              "
          >
            <div>
              <span
                className="
                    px-4
                    py-2
                   rounded-lg
                    inline-block
                    bg-white
                    text-gray-900
                  "
              >
                {message.text}
              </span>
            </div>
          </div>
          <i className="fas fa-desktop  w-6 h-6 rounded-full order-1"></i>
        </div>
      ) : (
        <div className="flex items-end pt-4 justify-end">
          <div
            className="
                flex flex-col
                space-y-2
                text-md
                max-w-xs
                mx-2
                order-1
                items-end
                shadow-md
                rounded-lg
              "
          >
            <div>
              <span
                className="
                    px-4
                    py-2
                    rounded-lg
                    inline-block
                    
                    bg-gray-900
                    text-white
                  "
              >
                {message.text}
              </span>
            </div>
          </div>
          <i className="fas fa-user w-6 h-6 rounded-full order-2"> </i>
        </div>
      )}
    </div>
  )
}

export default Message
