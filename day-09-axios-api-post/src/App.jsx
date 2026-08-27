import { useState } from "react"
import OrderForm from "./OrderForm"
import ShowOrders from "./ShowOrders"

const App = () => {
  const[refresh,setRefresh]=useState(0);
  return (
    <div>
      
      <center>
        <h1>Food Delivery System</h1>
        <h3>Food Orders</h3>
        <OrderForm  setRefresh={setRefresh}/>    <br />
        <ShowOrders reload={refresh}/>
      </center>
    </div>
  )
}

export default App
