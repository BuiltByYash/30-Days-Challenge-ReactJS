import axios from "axios"
import { useState } from "react"
const OrderForm = ({setRefresh}) => {
    const[form,setForm]=useState({ id:"",
  "customerName": "",
  "foodName": "",
  "quantity": "",
  "price": "",
  "paymentMethod": "",
  "orderStatus": ""
})

    const handleChange=(e)=>{
        let{name,value}=e.target;
        setForm({...form,[name]:value})
    }
    const handleForm=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3000/foods`,form)
        setRefresh(refresh=>refresh+1)
    }
    
  return (
    <div>
        <center>
            <form onSubmit={handleForm} >
<input type="text" name="id" value={form.id} onChange={handleChange} placeholder="Enter Order ID"/>
<br /><br />
<input type="text" name="customerName" value={form.customerName} onChange={handleChange} placeholder="Enter Customer Name"/>
<br/><br />
<input type="text" name="foodName" value={form.foodName} onChange={handleChange} placeholder="Enter Food Name"/>
<br/><br />

<input
  type="number"
  name="quantity"
  value={form.quantity}
  onChange={handleChange}
  placeholder="Enter Quantity"
/><br/><br />

<input
  type="number"
  name="price"
  value={form.price}
  onChange={handleChange}
  placeholder="Enter Price"
/><br/><br />

<select
  name="paymentMethod"
  value={form.paymentMethod}
  onChange={handleChange}
>
  <option value="">Select Payment Method</option>
  <option value="Cash">Cash</option>
  <option value="UPI">UPI</option>
  <option value="Card">Card</option>
  <option value="Net Banking">Net Banking</option>
</select>
<br /><br />

<select
  name="orderStatus"
  value={form.orderStatus}
  onChange={handleChange}
>
  <option value="">Select Order Status</option>
  <option value="Preparing">Preparing</option>
  <option value="Out for Delivery">Out for Delivery</option>
  <option value="Delivered">Delivered</option>
  <option value="Cancelled">Cancelled</option>
</select>
<br /><br />
<button type="submit">Order</button>
            </form>
        </center>
      
    </div>
  )
}

export default OrderForm
