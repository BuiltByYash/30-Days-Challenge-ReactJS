import { useState } from 'react'
import HotelForm from './HotelForm'
import ReceivedDetails from './ReceivedDetails'

const App = () => {
  const [data, setData] = useState([])
  const [editData, setEditData] = useState(null)

  const receivedData = (dt) => {

    if (editData) {
      const updatedData = data.map((user) =>
        user.id === editData.id ? dt : user
      )

      setData(updatedData)
      setEditData(null)

    } else {
      setData([...data, dt])
    }

  }

  const handleDelete = (id) => {
    const updatedelete = data.filter((user) => user.id !== id)
    setData(updatedelete)
  }

  const handleEdit = (user) => {
    setEditData(user)
  }

  return (
    <div>
      <center>
        <h1>Hotel Booking System</h1>
        <HotelForm
          sendToApp={receivedData}
          editData={editData}
        />

        <ReceivedDetails
          alldata={data}
          del={handleDelete}
          edit={handleEdit}
        />
      </center>
    </div>
  )
}

export default App