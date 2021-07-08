import React from 'react'

const Message = ({ message }) => {
  return (
    <>
      {message.isBot ? (
        <div class="flex items-end">
          <div
            class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-2
                items-start
                shadow-md
                rounded-lg
               
              "
          >
            <span
              class="
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
          <i
            
            class="fas fa-desktop w-6 h-6 rounded-full order-1"
          />
        </div>
      ) : (
        
          <div class="flex items-end pt-4 justify-end">
            <div
              class="
                flex flex-col
                space-y-2
                text-xs
                max-w-xs
                mx-2
                order-1
                items-end
                shadow-md
                rounded-lg
              "
            >
              
                <span
                  class="
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
            <i
            
            class="fas fa-user w-6 h-6 rounded-full order-1"
          />
          </div>
       
      )}
    </>
  )
}

export default Message
