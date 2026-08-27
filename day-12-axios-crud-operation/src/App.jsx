import { useState } from "react";
import PatientForm from "./PatientForm";
import ShowPatients from "./ShowPatients";

const App = () => {

  const [refresh, setRefresh] = useState(0);
  const [editPatient, setEditPatient] = useState(null);

  return (
    <div>
      <center>
        <h1>Hospital Management System</h1>
        <h3>Patient Records</h3>

        <PatientForm
          setRefresh={setRefresh}
          editPatient={editPatient}
          setEditPatient={setEditPatient}
        />

        <br />

        <ShowPatients
          reload={refresh}
          setEditPatient={setEditPatient}
        />

      </center>
    </div>
  );
};

export default App;