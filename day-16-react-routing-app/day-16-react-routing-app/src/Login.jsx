import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setLogin}) => {

    const [form, setForm] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const navigateMe = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(form)

        if (form.email == 'yash@gmail.com' && form.password == 'yashu@123') {
            localStorage.setItem("isLogin" , "yes")

        } else {

            localStorage.setItem("isLogin" , "no")
        }

        navigateMe('/dashboard')
    }


  return (
    <div>

        <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                email : <input type="text" name='email' value={form.email} onChange={handleChange} /> <br /><br />
                password : <input type="text" name='password' value={form.password} onChange={handleChange} /> <br /><br />
                <button>Login</button>
            </form>
      
    </div>
  )
}

export default Login
