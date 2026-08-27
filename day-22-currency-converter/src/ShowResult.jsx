const ShowResult = (props) => {

  return (
    <div>

      {props.result && (

        <table border="2" cellPadding="10">

          <thead>

            <tr>
              <th>Amount</th>
              <th>From</th>
              <th>To</th>
              <th>Converted Amount</th>
            </tr>

          </thead>

          <tbody>

            <tr>

              <td>{props.amount}</td>
              <td>{props.from}</td>
              <td>{props.to}</td>
              <td>{props.result}</td>

            </tr>

          </tbody>

        </table>

      )}

    </div>
  );

};

export default ShowResult;