import React, { useEffect, useState } from 'react'
import { api } from '../src/services'

const ShowOrder = () => {

    const [allOrders , setAllOrders] = useState([])

    const loadOrders = async () => {
        const {data} = await api.get(`/`)
        setAllOrders(data)
    }

    useEffect(() => {
        loadOrders()
    }, [])

  return (
    <div>

        <table border='2'>

      <thead>
        <tr>
          <th>
            Customer Name
          </th>

          <th>
            Quantity
          </th>

          <th>
            Status
          </th>

          <th>
            Food Item
          </th>

          <th>
            Price
          </th>

          <th>
            Payment
          </th>

        </tr>
      </thead>

      <tbody>

        {allOrders.map((u) => (

          <tr
            key={u.id}
            className="border-b border-slate-100 transition hover:bg-slate-50"
          >

            <td className="px-4 py-4 font-medium text-slate-800">
              {u.customerName}
            </td>

            <td className="px-4 py-4 text-slate-600">
              {u.quntity}
            </td>

            <td className="px-4 py-4">

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  u.status === 'Delivery'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {u.status}
              </span>

            </td>

            <td className="px-4 py-4 text-slate-600">
              {u.foodistem}
            </td>

            <td className="px-4 py-4 font-semibold text-slate-800">
              ₹{u.price}
            </td>

            <td className="px-4 py-4 text-slate-600">
              {u.paymentmode}
            </td>

          </tr>

        ))}

      </tbody>

    </table>
      
    </div>
  )
}

export default ShowOrder
