import {  useEffect, useState } from "react"

const EveryRender = () => {
    const[count,setCount]=useState(0);
    const handleCounter=()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        console.log("Component Rendered...")
    })
  return (
    <div>
        <center>
            <h2>useEffect without Dependency Array</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleCounter}>
                Increase Count
            </button>
            
        </center>
      
    </div>
  )
}

export default EveryRender
