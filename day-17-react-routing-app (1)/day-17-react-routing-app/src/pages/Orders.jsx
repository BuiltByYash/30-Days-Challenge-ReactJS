import React from 'react'

const Orders = () => {

    const orders = [
    {
      id: 1,
      product: "Samsung Mobile",
      price: 15000,
      status: "Delivered",
    },
    {
      id: 2,
      product: "T-Shirt",
      price: 799,
      status: "Shipped",
    },
  ];


  return (
    <div>

        <h2>My Orders</h2>

        {orders.map((item) => (
            <div key={item.id}>
            <h4>{item.product}</h4>
            <p>Price: ₹{item.price}</p>
            <p>Status: {item.status}</p>
            <hr />
            </div>
        ))}
        
    </div>
  )
}

export default Orders
