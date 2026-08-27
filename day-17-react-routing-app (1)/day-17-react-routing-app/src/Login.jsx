import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [form, setForm] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.get("http://localhost:3000/users");

    const users = data;

    const usr = users.find((u) => u.email == form.email);

    if (usr != null) {

        if (usr.password == form.password) {

            localStorage.setItem("userRole", JSON.stringify(usr));

            navigate("/dashboard");

        } else {

            alert("Incorrect Password");

        }

    } else {

        alert("User Does Not Exist");

    }

}


  return (
    <div>

        <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                email : <input type="text" name='email' value={form.email} onChange={handleChange} /> <br /><br />
                password : <input type="text" name='password' value={form.password} onChange={handleChange} /> <br /><br />
                <button type='submit'>Login</button>
            </form>
      
    </div>
  )
}

export default Login
