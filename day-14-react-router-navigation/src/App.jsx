import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Kids from './pages/Kids'
import Mobiles from './pages/Mobiles'
import Fashion from './pages/Fashion'
import Navbar from './components/Navbar'

const App = () => {
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

        </Routes>
        
      </center>  
      
    </div>
  )
}

export default App
