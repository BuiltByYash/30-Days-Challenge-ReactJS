import { useEffect, useState } from "react"
import axios from "axios"

const ShowOrders = () => {
    const[orders,setOrders]=useState([]);

    const loadorders=()=>{
        axios.get(`http://localhost:3000/foods`)
        .then((response)=>{
            setOrders(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    } 
    useEffect(()=>{
        loadorders();
    },[]);

  return (
    <div>
        <center>
            <table border={2} cellPadding="10"  >
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Food Name</th>
                        <th>Quantity</th>
                        <th>Price (₹)</th>
                        <th>Payment Method</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order)=>(
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.foodName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.paymentMethod}</td>
                            <td>{order.orderStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default ShowOrders
