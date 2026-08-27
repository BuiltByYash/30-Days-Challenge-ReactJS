import { useState, useEffect } from "react";
import "./App.css";
import NoteForm from "./NoteForm";
import ReceivedNotes from "./ReceivedNotes";

const App = () => {

  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  // Load Notes from Local Storage
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    setData(notes);
  }, []);

  // Save Notes to Local Storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(data));
  }, [data]);

  const receivedData = (dt) => {

    if (editData) {

      const updatedData = data.map((note) =>
        note.id === editData.id ? dt : note
      );

      setData(updatedData);
      setEditData(null);

    } else {

      setData([...data, dt]);

    }

  };

  const handleDelete = (id) => {

    const updatedDelete = data.filter((note) => note.id !== id);

    setData(updatedDelete);

  };

  const handleEdit = (note) => {

    setEditData(note);

  };

  return (
    <div>
      <center>

        <h1>📝 Notes App</h1>

        <input
          type="text"
          placeholder="Search Notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <br /><br />

        <NoteForm
          sendToApp={receivedData}
          editData={editData}
        />

        <ReceivedNotes
          alldata={data}
          del={handleDelete}
          edit={handleEdit}
          search={search}
        />

      </center>
    </div>
  );
};

export default App;