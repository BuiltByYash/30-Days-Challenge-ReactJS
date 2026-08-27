import axios from "axios"
import { useEffect, useState } from "react"
const ShowOrders = ({reload,seteditOrder}) => {
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
    },[reload]);

    const deleteOrder=async(id)=>{
        await axios.delete(`http://localhost:3000/foods/${id}`)
        setOrders(orders.filter(order=>order.id!==id))
    }
    
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
                        <th>Action</th>
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
                            <td>
                                <button onClick={()=>deleteOrder(order.id)}>
                                    Delete
                                </button>
                                 {" "}
                                <button onClick={()=>seteditOrder(order)}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default ShowOrders
