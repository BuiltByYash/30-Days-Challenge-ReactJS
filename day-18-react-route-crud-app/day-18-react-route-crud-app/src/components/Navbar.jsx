import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <nav>
        <Link to='/'>Homepage</Link> {" | "}
        <Link to='mobiles'>Mobiles</Link> {" | "}
        <Link to='fashion'>Fashion</Link> {" | "}
        <Link to='electronics'>Electronics</Link> {" | "}
        <Link to='login'>Login</Link> {" | "}
       
      </nav>
    </div>
  )
}

export default Navbar