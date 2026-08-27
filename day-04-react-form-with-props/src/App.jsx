import { useState } from "react"
import EmployeeForm from "./EmployeeForm"
import RecievedData from "./RecievedData"

const App = () => {
  const[employees, SetEmployees]=useState([])

  const receiveEmp=(dt)=>{
    SetEmployees([...employees,dt])   
  }

  return (
    <div>
      <EmployeeForm empData={receiveEmp}/>
      <RecievedData EmpList={employees}/>
    </div>
  )
}

export default App
