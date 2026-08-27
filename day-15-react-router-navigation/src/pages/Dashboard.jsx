import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navig = useNavigate() ;

    const handleLogout = () => {

        navig('/login')

        localStorage.removeItem("isLogin")
    }


  return (
    <div>

        <h2>Welcome to Dashboard</h2>

        <button onClick={handleLogout}>Logout</button>
      
    </div>
  )
}

export default Dashboard
