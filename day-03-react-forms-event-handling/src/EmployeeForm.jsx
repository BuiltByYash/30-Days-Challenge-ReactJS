import {  useState } from "react"

const EmployeeForm = () => {
   const[employee,SetEmp]=useState({empId:"", empName:"",email:"",department:"",salary:""})
   const[empdata,SetEmpData]=useState(null)
   
   const handleChange=(e)=>{
     let{name,value}=e.target;
     SetEmp({...employee,[name]:value})
   }
   
   const formsubmit=(e)=>{
     e.preventDefault();
     alert("Employee Data Stored Successfully")
     SetEmpData(employee)
     SetEmp({empId:"", empName:"",email:"",department:"",salary:""})
 
   }
 
   return (
     <div>
       <center>
         <h1>Employee Form</h1>
         <form onSubmit={formsubmit}>
           <input
   type="text"
   name="empId"
   value={employee.empId}
   onChange={handleChange}
   placeholder="Enter emp id"
 />
 
 <br />
 
 <input type="text" name="empName" value={employee.empName} onChange={handleChange} placeholder="Enter employee name" />
 <br />
 <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Enter email" />
 <br />
 <input type="text" name="department" value={employee.department} onChange={handleChange} placeholder="Enter department"/>
 <br />
 <input type="text" name="salary" value={employee.salary} onChange={handleChange} placeholder="Enter salary"/><br/><br/>
 
 <button type="submit">Submit</button>
         </form>
  <h1>--------------------------------------------------------------------------------------------</h1>
         {empdata &&(
           <div>
             <center>
               <h2>Employee Details</h2>
               <p>Emp ID: {empdata.empId}</p>
               <p>Emp Name: {empdata.empName}</p>
               <p>Emp Email: {empdata.email}</p>
               <p>Department: {empdata.department}</p>
               <p>Salary: {empdata.salary}</p>
             </center>
           </div>
         )}
       </center>
       
     </div>
   )
}

export default EmployeeForm
