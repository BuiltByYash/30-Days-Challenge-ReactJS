import './App.css'
import { useState } from 'react'
import { api } from './services'
import ShowData from './ShowData'

const App = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [show, setShow] = useState(false)
  const [role, setRole] = useState(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const users = await api.get('/users').then((res) => res.data)

    users.map((user) => {
      if (
        user.email === form.email &&
        user.password === form.password
      ) {
        setRole(user.role)
        setShow(true)
      }
    })

    setForm({
      email: '',
      password: ''
    })
  }

  return (
    <center>

      <h1>Welcome to My Login App</h1>

      <form onSubmit={handleSubmit}>

        Email :
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        Password :
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button>Login User</button>

      </form>

      <br />

      {
        show &&
        (
          role === "admin"
            ? <ShowData />
            : role === "user"
              ? <h2>Welcome User</h2>
              : ""
        )
      }

    </center>
  )
}

export default App