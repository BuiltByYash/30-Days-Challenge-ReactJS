import { useEffect, useState } from "react"
import { api } from "./services"

const ShowData = () => {

  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = () => {

    api.get("/users")
      .then((res) => {
        setAllUsers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (

    <table border="2">

      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>

        {
          allUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }

      </tbody>

    </table>

  )
}

export default ShowData