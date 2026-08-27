import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>

        <nav>

            <Link to='/' >HomePage</Link> {" | "}
            <Link to='kids' >Kids</Link> {" | "}
            <Link to='mobiles' >Mobiles</Link> {" | "}
            <Link to='fashion' >Fashion</Link> {" | "}
            <Link to='login' >Login</Link> {" | "}
            <Link to='dashboard' >Dashboard</Link> {" | "}
            <Link to='profile' >Profile</Link> {" | "}
            <Link to='settings' >Settings</Link> {" | "}
            <Link to='orders' >Orders</Link> {" | "}


        </nav>
      
    </div>
  )
}

export default Navbar
