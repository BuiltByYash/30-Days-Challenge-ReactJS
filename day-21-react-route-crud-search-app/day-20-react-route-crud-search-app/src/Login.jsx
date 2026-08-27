import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from './apiServices';

const Login = () => {

    const [form, setForm] = useState({ email: '', password: '' })


    const loginTime = new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});

localStorage.setItem("lastLogin", loginTime);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const navigateMe = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await api.get('/')
        const allemps = data;
        const userFound = allemps.find((u) => u.email == form.email)

        if (userFound != null) {

            if (userFound.password == form.password) {
                localStorage.setItem("userRole", userFound.role)
                 localStorage.setItem("userName", userFound.name);

                 // Last Login
                localStorage.setItem("lastLogin", new Date().toLocaleString());

                 // Login Count
                let count = Number(localStorage.getItem("loginCount")) || 0;
                count++;
                localStorage.setItem("loginCount", count);

                navigateMe('/dashboard')
            } else {  
                alert('Incorrect Password')
            }

        } else {
            alert('User does not exist')
        }

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