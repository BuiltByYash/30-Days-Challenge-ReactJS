import { useState } from "react"

const LightTheme = () => {
    const[mode,setMode]=useState(false)
  return (
    <div style={{
    backgroundColor: mode ? "white" : "black",
    color: mode ? "black" : "white",
    padding: "20px"
  }}>
         
        <center>
        <h1>{mode? "Light mode": "Dark mode"}</h1><br />
        <button onClick={()=>setMode(!mode)}>
            {mode? "Dark" : "Light"}
        </button>
      </center>
    </div>
  )
}

export default LightTheme
