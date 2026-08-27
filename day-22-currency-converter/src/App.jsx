import { useState } from "react";
import CurrencyForm from "./CurrencyForm";
import ShowResult from "./ShowResult";
import "./App.css";

const App = () => {

  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState("");

  const currencies = [
    "USD",
    "INR",
    "EUR",
    "GBP",
    "JPY",
    "AED",
    "CAD",
    "AUD",
  ];

  return (
    <div>
      <center>

        <h1>💱 Currency Converter</h1>

        <CurrencyForm
          amount={amount}
          setAmount={setAmount}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          result={result}
          setResult={setResult}
          currencies={currencies}
        />

        <br />

        <ShowResult
          amount={amount}
          from={from}
          to={to}
          result={result}
        />

      </center>
    </div>
  );
};

export default App;