import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes

import './App.css'
import Card from './components/Card'
import React from 'react'
import Results from './components/Results'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Router>
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/questions" element={<Card/>}/>
      <Route path="/results" element={<Results/>}/>
    </Routes>
   </Router>    </>
  )
}

export default App
