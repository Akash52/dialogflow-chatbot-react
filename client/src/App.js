import React, { useState } from 'react'
import Button from './Components/Button'
import Chat from './Components/Chat'

const App = () => {
  const [show, setShow] = useState(false)

  const showBtn = () => {
    setShow(!show)
  }

  return (
    <>
      <Button show={show} showBtn={showBtn} />
      {show && <Chat />}
    </>
  )
}

export default App
