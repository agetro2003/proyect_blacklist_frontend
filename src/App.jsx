// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/Login";


<Router>
  <Routes>
    <Route exact path="/" >
      <Home />
    </Route>
    {/* <Route exact path="/Login">
    <Login />
  </Route> */}
    {/* <Login /> */}
  </Routes>
</Router>


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Login />
      </Routes>
    </Router>

  )
}

export default App
