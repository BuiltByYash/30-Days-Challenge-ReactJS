import { useState, useEffect } from "react";

const NoteForm = ({ sendToApp, editData }) => {

  const [note, setNote] = useState({
    id: "",
    title: "",
    description: ""
  });

  useEffect(() => {
    if (editData) {
      setNote(editData);
    }
  }, [editData]);

  const handleform = (e) => {
    let { name, value } = e.target;

    setNote({
      ...note,
      [name]: value
    });
  };

  const submitform = (e) => {
    e.preventDefault();

    sendToApp(note);

    setNote({
      id: "",
      title: "",
      description: ""
    });
  };

 return (
  <div>
    <center>
      <form onSubmit={submitform}>

        <table>
          <tbody>

            <tr>
              <td>ID :</td>
              <td>
                <input
                  type="number"
                  name="id"
                  value={note.id}
                  onChange={handleform}
                  placeholder="Enter ID"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Title :</td>
              <td>
                <input
                  type="text"
                  name="title"
                  value={note.title}
                  onChange={handleform}
                  placeholder="Enter Note Title"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>Description :</td>
              <td>
                <textarea
                  name="description"
                  value={note.description}
                  onChange={handleform}
                  placeholder="Enter Description"
                  required
                ></textarea>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button>
                  {editData ? "Update Note" : "Add Note"}
                </button>
              </td>
            </tr>

          </tbody>
        </table>

      </form>
    </center>
  </div>
);
};

export default NoteForm;