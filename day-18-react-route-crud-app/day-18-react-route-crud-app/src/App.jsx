import React, { useState } from 'react'
import Mobiles from './pages/Mobiles'
import Fashion from './pages/Fashion'
import Electronics from './pages/Electronics'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Login from './Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'


const App = () => {

  return (
    <div>
      <center>
        <h1>My Flipkart app</h1>

        <Navbar /> <br /><br />

        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='mobiles' element={<Mobiles />} />
          <Route path='fashion' element={<Fashion />} />
          <Route path='electronics' element={<Electronics />} />
          <Route path='login' element={<Login />} />

          <Route path='dashboard' element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
          } />

        </Routes>


        {/* 
           <Mobiles/>
           <Fashion/>
           <Electronics/> 
           */}

      </center>
    </div>
  )
}

export default App