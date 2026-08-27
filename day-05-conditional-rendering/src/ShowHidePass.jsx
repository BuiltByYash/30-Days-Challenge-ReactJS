import { useState } from "react"

const ShowHidePass = () => {
    const[showPass, setShowPass]=useState(false)
  return (
    <div>
        <center>
        <h3>Password: <input type={showPass?"text":"password"} placeholder="Enter Password" /></h3><br />
        <button onClick={()=>setShowPass(!showPass)}> 
            {showPass?"🚫Hide":"👁 Show"}
        </button>
      </center>
    </div>
  )
}

export default ShowHidePass
