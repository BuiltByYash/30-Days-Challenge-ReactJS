import "./App.css";
import { useRef } from "react";
import UseReff from "./UseReff";

const App = () => {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  return (
    <>
    <h1 className="title">
  🚀 Day 23 – Mastering the useRef Hook in React.js
    </h1>

      {/* OTP Card */}
      <div className="otp-container">
        <h2>OTP Verification</h2>

        <div className="otp-box">
          <input
            type="text"
            maxLength={1}
            ref={input1}
            onChange={() => input2.current.focus()}
          />

          <input
            type="text"
            maxLength={1}
            ref={input2}
            onChange={() => input3.current.focus()}
          />

          <input
            type="text"
            maxLength={1}
            ref={input3}
            onChange={() => input4.current.focus()}
          />

          <input
            type="text"
            maxLength={1}
            ref={input4}
          />
        </div>

        <button>Submit</button>
      </div>

      {/* Login Card */}
      <UseReff />
    </>
  );
};

export default App;