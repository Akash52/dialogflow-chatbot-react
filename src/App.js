import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Chat from './Chat'
import Header from './Layout/Header'

export default function App() {
  return (
    <Router>
      <Header />
      <Chat />
    </Router>
  )
}
