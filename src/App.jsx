 import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/login";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={ <Home />}/>
        <Route exact path="/Login" element={<Login />}/>
      </Routes>
    </Router>

  )
}

export default App
