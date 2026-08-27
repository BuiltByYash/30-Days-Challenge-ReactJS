import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../apiServices';

const Dashboard = () => {

  const [allusers , setAllusers] = useState([])

  // const [edit , setEdit] = useState({ name: '', email: '', password: '', role: '' })
  const [edit , setEdit] = useState(null)

  const loginPerson = localStorage.getItem("userRole");

  const [form, setForm] = useState({ name: '', email: '', password: '', role: '' })

  const navig = useNavigate();

  const loadAllEmployees = async () => {
    const {data} = await api.get('/')
    setAllusers(data)
  }


  useEffect(() => {
    loadAllEmployees();
  }, [])

  const handleChange = (e) => {

    const {name , value} = e.target ;

    setForm({...form ,[name]:value})
  }

  const handleLogout = () => {

    navig('/login')

    localStorage.removeItem("isLogin")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form)
    
    if (edit) {
      const up = await api.put(`/${edit.id}`,form)
      setEdit(null)

    } else {
      const res = await api.post('/', form)
    }

    loadAllEmployees();    
    setForm({ name: '', email: '', password: '', role: '' })

  }

  const handleDelete = async (id) => {
    const res = await api.delete(`/${id}`)
     console.log(res)
     loadAllEmployees() ;
  }

  const handleUpdate = (usr) => {
    setEdit(usr)
    // setForm(edit)
    setForm({ name: usr.name, email: usr.email, password: usr.password, role: usr.role })
  }

  return (
    <div>

      <h2>Welcome to Dashboard : {loginPerson.toUpperCase()}</h2>

      {
        loginPerson == 'admin' && (
          <>
            <form onSubmit={handleSubmit}>
              Name : <input type="text" name='name' value={form.name} onChange={handleChange} /><br /><br />
              email : <input type="text" name='email' value={form.email} onChange={handleChange} /><br /><br />
              password : <input type="text" name='password' value={form.password} onChange={handleChange} /><br /><br />
              role : <select name="role" onChange={handleChange}>
                <option value="admin">admin</option>
                <option value="user">user</option>
              </select> <br /><br />
                <button type='submit'>
                  {edit ? "Update User" : "Add User"}
                </button>
            </form>

            <h2>All Users Info</h2>
            <table border='2'>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>PASSWORD</th>
                  <th>ROLE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {
                  allusers.map((u) => (
                    <tr key={u.id}>

                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>{u.password}</td>
                      <td>{u.role}</td>
                      <td>
                        <button onClick={() => handleDelete(u.id)}>
                          Delete
                        </button> {" "}
                        <button onClick={() => handleUpdate(u)}>
                          Update
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </>
        )
      }
 <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard