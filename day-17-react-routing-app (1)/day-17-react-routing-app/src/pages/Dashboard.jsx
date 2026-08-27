import React from 'react'
import dashboard from '../assets/Dashboard.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('userRole')

    navigate('/login')
  }

  // const userLog = JSON.parse(localStorage.getItem('userRole'))

  const data = localStorage.getItem("userRole");

  const userLog = data ? JSON.parse(data) : null;


  return (
    <div>

        <h2>Welcome to Dashboard : </h2>

        <h3>Name : {userLog?.name}</h3>
        <h3>Role : {userLog?.role}</h3>
        <h3>Email : {userLog?.email}</h3>

      <br /><br />

        <button onClick={handleLogout}>Logout</button><br /><br />
        
        {/* <nav>
          <Link to='profile' >Profile</Link> {" | "}
          <Link to='settings' >Settings</Link> {" | "}
          <Link to='orders' >Orders</Link> {" | "}
        </nav> */}

        {/* <img src={dashboard} alt="" /> */}

      
    </div>
  )
}

export default Dashboard
