import axios from "axios";
import { useEffect, useState } from "react";

const PatientForm = ({ setRefresh, editPatient, setEditPatient }) => {

  const [form, setForm] = useState({
    id: "",
    patientName: "",
    age: "",
    disease: "",
    doctorName: "",
    roomNumber: "",
    status: ""
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editPatient) {
        await axios.put(
          `http://localhost:3000/patients/${editPatient.id}`,
          form
        );
      } else {
        await axios.post(
          `http://localhost:3000/patients`,
          form
        );
      }

      setRefresh((prev) => prev + 1);

      setForm({
        id: "",
        patientName: "",
        age: "",
        disease: "",
        doctorName: "",
        roomNumber: "",
        status: ""
      });

      setEditPatient(null);

    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {

    if (editPatient) {
      setForm(editPatient);
    }

  }, [editPatient]);

  return (
    <div>

      <form onSubmit={handleSubmit}>

        
        <input
          type="text"
          name="patientName"
          value={form.patientName}
          onChange={handleChange}
          placeholder="Enter Patient Name"
        />

        <br /><br />

        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Enter Age"
        />

        <br /><br />

        <input
          type="text"
          name="disease"
          value={form.disease}
          onChange={handleChange}
          placeholder="Enter Disease"
        />

        <br /><br />

        <input
          type="text"
          name="doctorName"
          value={form.doctorName}
          onChange={handleChange}
          placeholder="Doctor Name"
        />

        <br /><br />

        <input
          type="text"
          name="roomNumber"
          value={form.roomNumber}
          onChange={handleChange}
          placeholder="Room Number"
        />

        <br /><br />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="">Select Status</option>
          <option value="Admitted">Admitted</option>
          <option value="Under Treatment">Under Treatment</option>
          <option value="Discharged">Discharged</option>
        </select>

        <br /><br />

        <button type="submit">
          {editPatient ? "Update" : "Add Patient"}
        </button>

      </form>

    </div>
  );
};

export default PatientForm;