import { useRef, useState } from "react";
import "./App.css";
function UseReff() {
  const emailRef = useRef(null);

  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // Check if email is empty
    if (email === "") {
      alert("Please enter your email");
      emailRef.current.focus();
      return;
    }

    // Check if email contains '@'
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      emailRef.current.focus();
      return;
    }

    alert("Login Successful");
  };

  return (
    <div className="login-container">
      
      <h2>Login Form</h2>

      <input
        type="email"
        placeholder="Enter Email"
        ref={emailRef}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
     
    </div>
  );
}

export default UseReff;