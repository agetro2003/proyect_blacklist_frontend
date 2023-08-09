 import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/Login";
import Pricing from './components/Pricing/pricing';
import Main from './components/Main/Main';
import Test from './components/Test/Test';
import PageNotFound from './components/PageNotFound/PageNotFound';
import UnAuthorized from './components/UnAuthorized/UnAuthorized';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={ <Home />}/>
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path="/Pricing" element={<Pricing />}/>
        <Route element={<ProtectedRoute/>}>
        <Route exact path='/Main' element={<Main/>}></Route>
        </Route>
        <Route exact path='/*' element={<PageNotFound/>}></Route>
        <Route exact path='/LogOut' element={<UnAuthorized/>}></Route>
      </Routes>
    </Router>

  )
}

export default App
