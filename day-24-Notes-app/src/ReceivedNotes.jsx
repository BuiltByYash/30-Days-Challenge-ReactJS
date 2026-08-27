const ReceivedNotes = ({ alldata, del, edit, search }) => {

  const filterData = alldata.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <center>

        <table border="2" cellPadding="10">

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filterData.map((s) => (

              <tr key={s.id}>

                <td>{s.id}</td>
                <td>{s.title}</td>
                <td>{s.description}</td>

                <td>

                  <button onClick={() => edit(s)}>
                    Update
                  </button>

                  {" "}

                  <button onClick={() => del(s.id)}>
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </center>
    </div>
  );
};

export default ReceivedNotes;