import { useEffect, useState } from "react";
import { api } from "./services";

const RecievedData = ({reload,setEdit}) => {

  const [allOrders,setAllOrders] = useState([]);

  const loadOrders = async () => {
    try {
      const response = await api.get(`/`);
      const data = Array.isArray(response.data) ? response.data : (response.data?.results || []);
      setAllOrders(data);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  };

  useEffect(() => {
    loadOrders();
  },[reload])


  const deleteOrder = async (id) => {

    try {

      await api.delete(`/${id}/`);

      setAllOrders(
        allOrders.filter(order => order.id !== id)
      );

    }
    catch(err) {
      console.log(err);
    }

  }


  return (
    <div className="space-y-8">

      {/* Orders Table Card */}
      <div className="order-card">

        <div className="mb-5 flex items-center justify-between">

          <h2 className="!mb-0 flex items-center gap-2">
            All Orders <span>👨‍🍳</span>
          </h2>

          <span className="badge-count">
            {allOrders.length} Orders
          </span>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[800px] border-collapse">

            <thead>

              <tr className="border-b border-slate-200 bg-slate-50 text-left">

                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                  👤 Customer Name
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                  🥗 Food Item
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                  📋 Quantity
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                  ₹ Price
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                  💳 Payment
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                  🕐 Status
                </th>

                <th className="px-4 py-3 text-sm font-semibold text-slate-600">
                  ⚙️ Action
                </th>

              </tr>

            </thead>


            <tbody>
              {allOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-slate-400 font-medium">
                    No orders in database yet. Add a new order using the form above! 🍽️
                  </td>
                </tr>
              ) : (
                allOrders.map((u) => (

                  <tr
                    key={u.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >

                    <td className="px-4 py-4 font-medium text-slate-800">
                      {u.customerName}
                    </td>

                    <td className="px-4 py-4 text-slate-600">
                      {u.foodistem}
                    </td>

                    <td className="px-4 py-4 text-slate-600">
                      {u.quntity}
                    </td>

                    <td className="px-4 py-4 font-semibold text-slate-800">
                      ₹{u.price}
                    </td>

                    <td className="px-4 py-4 text-slate-600">
                      {u.paymentmode}
                    </td>

                    <td className="px-4 py-4">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          u.status === 'Delivered'
                            ? 'bg-green-100 text-green-700'
                            : u.status === 'Out for Delivery'
                            ? 'bg-blue-100 text-blue-700'
                            : u.status === 'Preparing'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {u.status}
                      </span>

                    </td>


                    <td className="px-4 py-4">

                      <div className="flex gap-2">

                        <button
                          onClick={() => setEdit(u)}
                          className="rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
                        >
                          ✏️ Update
                        </button>


                        <button
                          onClick={() => deleteOrder(u.id)}
                          className="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                        >
                          🗑️ Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))
              )

            }
            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default RecievedData;