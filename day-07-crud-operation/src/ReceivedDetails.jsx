const ReceivedDetails = ({ alldata, del, edit }) => {
  return (
    <div>
      <center>
        <table border="2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Adults</th>
              <th>Infants</th>
              <th>Room</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {alldata.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.uName}</td>
                <td>{s.mobile}</td>
                <td>{s.email}</td>
                <td>{s.adults}</td>
                <td>{s.infants}</td>
                <td>{s.Room}</td>
                <td>{s.Desc}</td>

                <td>
                  <button onClick={() => edit(s)}>Update</button>

                  {" "}

                  <button onClick={() => del(s.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </center>
    </div>
  )
}

export default ReceivedDetails