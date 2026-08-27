const RecievedData = ({EmpList}) => {
  return (
    <div>
      <center>
       <table border="1" cellPadding="10">
  <thead>
    <tr>
      <th>Employee ID</th>
      <th>Employee Name</th>
      <th>Email</th>
      <th>Department</th>
      <th>Salary</th>
    </tr>
  </thead>

  <tbody>
    {EmpList.map((p)=>(
        <tr key={p.empId}>
            <td>{p.empId}</td>
            <td>{p.empName}</td>
            <td>{p.email}</td>
            <td>{p.department}</td>
            <td>{p.salary}</td>
        </tr>
    ))}
  </tbody>
</table>
      </center>
    </div>
  )
}

export default RecievedData
