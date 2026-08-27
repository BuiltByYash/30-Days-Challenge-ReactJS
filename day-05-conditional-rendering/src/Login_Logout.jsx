import { useState } from "react"

const Login_Logout = () => {
    const[isLogin, setLogin]=useState(false);

  return (
    <div>
        <center> 
      <h2>
        {isLogin ? "Welcome Yash 👋" : "Please Login"}
      </h2>

        {isLogin&&(
            <div>
                <h3>Name: Yash Pawar</h3>
                <h3>Skill: React.js</h3>
            </div>
        )}
        <br />
        
        <button onClick={()=>setLogin(!isLogin)}>
            {isLogin? "🔒Logout" : "🔓Login"}

        </button>

      </center>
    </div>
  )
}

export default Login_Logout
