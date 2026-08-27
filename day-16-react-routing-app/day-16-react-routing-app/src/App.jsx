import { Route, Routes } from 'react-router-dom'
import './App.css'
import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import Kids from './pages/Kids'
import Mobiles from './pages/Mobiles'
import Fashion from './pages/Fashion'
import Navbar from './components/Navbar'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Orders from './pages/Orders'

const App = () => {

  const [log , setLog] = useState(false)

  return (
    <div>

      <center>

        <h1>My Flipkart App</h1> 

        <Navbar /> <br />

        <Routes>

          <Route path='/' element={<HomePage/>}/>
          <Route path='kids' element={<Kids/>}/>
          <Route path='mobiles' element={<Mobiles/>}/>
          <Route path='fashion' element={<Fashion/>}/>
          <Route path='login' element={<Login />}/>
          {/* <Route path='profile' element={<Profile />}/>
          <Route path='settings' element={<Settings />}/>
          <Route path='orders' element={<Orders />}/> */}

          <Route path='dashboard' element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          } >

            <Route path='profile' element={<Profile />}/>
            <Route path='settings' element={<Settings />}/>
            <Route path='orders' element={<Orders />}/>

          </Route>

        </Routes>

        {/* <ProtectedRoute/> */}
        
      </center>  
      
    </div>
  )
}

export default App
