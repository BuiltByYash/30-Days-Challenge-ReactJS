import axios from "axios";

const CurrencyForm = (props) => {

  const convertCurrency = () => {

    if (props.amount === "" || props.amount <= 0) {
      alert("Please Enter Amount");
      return;
    }

    axios
      .get(`https://open.er-api.com/v6/latest/${props.from}`)
      .then((response) => {

        let rate = response.data.rates[props.to];

        let total = props.amount * rate;

        props.setResult(total.toFixed(2));

      })
      .catch((err) => {
        console.log(err);
      });

  };

  const swapCurrency = () => {

    let temp = props.from;

    props.setFrom(props.to);

    props.setTo(temp);

  };

return (
  <div className="currency-form">

    <div className="form-group">
      <input
        type="number"
        placeholder="Enter Amount"
        value={props.amount}
        onChange={(e) => props.setAmount(e.target.value)}
      />
    </div>

    <div className="form-row">
      <label>From:</label>
      <select
        value={props.from}
        onChange={(e) => props.setFrom(e.target.value)}
      >
        {props.currencies.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>

    <div className="form-group">
      <button onClick={swapCurrency}>⇄ Swap</button>
    </div>

    <div className="form-row">
      <label>To:</label>
      <select
        value={props.to}
        onChange={(e) => props.setTo(e.target.value)}
      >
        {props.currencies.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>

    <div className="form-group">
      <button onClick={convertCurrency}>Convert</button>
    </div>

  </div>
);

};

export default CurrencyForm;