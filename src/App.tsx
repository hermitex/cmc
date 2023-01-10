import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainMenu from './components/MainMenu/MainMenu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <MainMenu/>
      <Home/>
    </Router>
  )
}

export default App
