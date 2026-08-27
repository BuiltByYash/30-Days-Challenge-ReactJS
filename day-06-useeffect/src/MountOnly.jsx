import { useEffect, useState } from "react"

const MountOnly = () => {
    const [count,setCount]=useState(0);
  const handleCounter=()=>{
          setCount(count+1);
      }
  
      useEffect(()=>{
          console.log("Component Mounted")
      },[])
    return (
      <div>
          <center>
            <h2>useEffect with Empty Dependency Array</h2>
              <h3>Count: {count}</h3>
               <button onClick={handleCounter}>
                  Increase Count
              </button>
              
          </center>
        
      </div>
    )
  }
export default MountOnly
