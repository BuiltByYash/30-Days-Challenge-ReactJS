import React from 'react'
import dashboard from '../assets/Dashboard.jpg'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navig = useNavigate() ;

    const handleLogout = () => {

        navig('/login')

        localStorage.removeItem("isLogin")
    }


  return (
    <div>

        <h2>Welcome to Dashboard</h2>

        <button onClick={handleLogout}>Logout</button><br /><br />
        
        <nav>
          <Link to='profile' >Profile</Link> {" | "}
          <Link to='settings' >Settings</Link> {" | "}
          <Link to='orders' >Orders</Link> {" | "}
        </nav>

        {/* <img src={dashboard} alt="" /> */}

        <Outlet/>
      
    </div>
  )
}

export default Dashboard
