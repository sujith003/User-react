import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import NoPageFound from './components/NoPageFound'
import AddUser from './components/AddUser'
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App