import axios from "axios";
import { useEffect, useState } from "react";

const ShowPatients = ({ reload, setEditPatient }) => {

  const [patients, setPatients] = useState([]);

  const loadPatients = () => {

    axios
      .get("http://localhost:3000/patients")
      .then((response) => {
        setPatients(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  useEffect(() => {
    loadPatients();
  }, [reload]);

  const deletePatient = async (id) => {

    await axios.delete(
      `http://localhost:3000/patients/${id}`
    );

    setPatients(
      patients.filter((patient) => patient.id !== id)
    );

  };

  return (
    <div>

      <table border="2" cellPadding="10">

        <thead>

          <tr>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Disease</th>
            <th>Doctor</th>
            <th>Room</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {patients.map((patient) => (

            <tr key={patient.id}>

              <td>{patient.id}</td>
              <td>{patient.patientName}</td>
              <td>{patient.age}</td>
              <td>{patient.disease}</td>
              <td>{patient.doctorName}</td>
              <td>{patient.roomNumber}</td>
              <td>{patient.status}</td>

              <td>

                <button onClick={() => deletePatient(patient.id)}>
                  Delete
                </button>
                {" "}
                <button onClick={() => setEditPatient(patient)}>
                  Update
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ShowPatients;