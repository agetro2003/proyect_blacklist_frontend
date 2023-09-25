// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Pricing from './components/Pricing/pricing';
import PageNotFound from './components/PageNotFound/PageNotFound';
import UnAuthorized from './components/UnAuthorized/UnAuthorized';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Pricing" element={<Pricing />} />
        <Route exact path="/Contacto" element={<Contact/>} />
        <Route element={<ProtectedRoute />}>
          <Route exact path='/main' element={<Dashboard />}></Route>

        </Route>
        <Route exact path='/*' element={<PageNotFound />}></Route>
        <Route exact path='/LogOut' element={<UnAuthorized />}></Route>
      </Routes>
    </Router>


  )
}

export default App
