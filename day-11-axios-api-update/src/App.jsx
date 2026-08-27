import { useState } from "react"
import OrderForm from "./OrderForm"
import ShowOrders from "./ShowOrders"

const App = () => {
  const[refresh,setRefresh]=useState(0);
  const[editOrder,seteditOrder]=useState(null)
  return (
    <div>
      
      <center>
        <h1>Food Delivery System</h1>
        <h3>Food Orders</h3>
        <OrderForm  setRefresh={setRefresh} editOrder={editOrder} seteditOrder={seteditOrder}/>    <br />
        <ShowOrders reload={refresh} seteditOrder={seteditOrder}/>
      </center>
    </div>
  )
}

export default App
