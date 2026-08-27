
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>

        <nav>

            <Link to='/' >HomePage</Link> {" | "}
            <Link to='kids' >Kids</Link> {" | "}
            <Link to='mobiles' >Mobiles</Link> {" | "}
            <Link to='fashion' >Fashion</Link> {" | "}

        </nav>
      
    </div>
  )
}

export default Navbar
