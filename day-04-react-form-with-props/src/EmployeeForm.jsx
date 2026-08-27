import { useState } from "react";
const EmployeeForm = ({empData}) => {
   const[employee,SetEmp]=useState({empId:"", empName:"",email:"",department:"",salary:""})
    
   const handleChange=(e)=>{
    let{name,value}=e.target;
    SetEmp({...employee,[name]:value})}

   const formsubmit=(e)=>{
     e.preventDefault();
     alert("Employee Data Stored Successfully")
     empData(employee);
     SetEmp({empId:"", empName:"",email:"",department:"",salary:""})
    }
  return (
     <div>
       <center>
         <h1>Employee Form</h1>
         <form onSubmit={formsubmit}>
           <input type="text" name="empId" value={employee.empId} onChange={handleChange} placeholder="Enter emp id"/>
 <br />
 <input type="text" name="empName" value={employee.empName} onChange={handleChange}placeholder="Enter employee name"
 /> 
 <br /> 
 <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Enter email"/>
 <br />
 <input type="text" name="department" value={employee.department} onChange={handleChange} placeholder="Enter department"/>
 <br />
 <input type="text" name="salary" value={employee.salary} onChange={handleChange} placeholder="Enter salary"/><br/>
 <br/>
 <button type="submit">Submit</button>
 </form>
         <br />
       </center>
       
     </div>
   )
}

export default EmployeeForm
