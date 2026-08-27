import { useEffect, useState } from "react";
import { api } from "./services";

const OrderForm = ({setRefresh,edit,setEdit}) => {

  const [form,setForm] = useState({
    customerName: '',
    quntity: '',
    status: '',
    foodistem: '',
    price: '',
    paymentmode: ''
  });

  const handleChange = (e) => {
    let {name,value} = e.target;
    setForm({...form,[name]:value});
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("FORM DATA:",form);

  try {

    if(edit){
      const response = await api.put(`/${edit.id}/`,form);
      console.log("UPDATE:",response.data);
      setEdit(null);
    }
    else{
      const response = await api.post(`/`,form);
      console.log("ADD:",response.data);
    }

    setForm({
      customerName: '',
      quntity: '',
      status: '',
      foodistem: '',
      price: '',
      paymentmode: ''
    });

    setRefresh(refresh => refresh + 1);
    

  }
  catch(err){
    console.log("ERROR:",err);
    console.log("STATUS:",err.response?.status);
    console.log("DATA:",err.response?.data);
  }
}

  useEffect(() => {
    if(edit){
      setForm(edit);
    }
  },[edit])

  return (
    <div className="space-y-8">

      {/* Form Card */}
      <div className="order-card">

        <h2>{edit ? 'Update Order' : 'Add Order'}</h2>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid gap-5 md:grid-cols-2"
        >

          {/* Customer Name */}
          <div className="flex items-start gap-3">

            <div className="field-icon icon-pink">
              👤
            </div>

            <div className="flex-1">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Customer Name
              </label>

              <input
                type="text"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter customer name"
              />

            </div>

          </div>


          {/* Food Item */}
          <div className="flex items-start gap-3">

            <div className="field-icon icon-green">
              🥗
            </div>

            <div className="flex-1">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Food Item
              </label>

              <select
                name="foodistem"
                value={form.foodistem}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >

                <option value="">
                  Select Food Item
                </option>

                <optgroup label="🥗 Veg">
                  <option value="Paneer Butter Masala">
                    Paneer Butter Masala
                  </option>

                  <option value="Veg Biryani">
                    Veg Biryani
                  </option>

                  <option value="Masala Dosa">
                    Masala Dosa
                  </option>

                  <option value="Pav Bhaji">
                    Pav Bhaji
                  </option>
                </optgroup>

                <optgroup label="🍗 Non-Veg">

                  <option value="Chicken Biryani">
                    Chicken Biryani
                  </option>

                  <option value="Butter Chicken">
                    Butter Chicken
                  </option>

                  <option value="Chicken Tikka">
                    Chicken Tikka
                  </option>

                  <option value="Mutton Biryani">
                    Mutton Biryani
                  </option>

                </optgroup>

                <optgroup label="🍰 Sweet">

                  <option value="Gulab Jamun">
                    Gulab Jamun
                  </option>

                  <option value="Jalebi">
                    Jalebi
                  </option>

                  <option value="Rasmalai">
                    Rasmalai
                  </option>

                  <option value="Kaju Katli">
                    Kaju Katli
                  </option>

                </optgroup>

              </select>

            </div>

          </div>


          {/* Quantity */}
          <div className="flex items-start gap-3">

            <div className="field-icon icon-blue">
              📋
            </div>

            <div className="flex-1">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Quantity
              </label>

              <input
                type="number"
                name="quntity"
                value={form.quntity}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter quantity"
              />

            </div>

          </div>


          {/* Price */}
          <div className="flex items-start gap-3">

            <div className="field-icon icon-yellow">
              ₹
            </div>

            <div className="flex-1">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter price"
              />

            </div>

          </div>


          {/* Payment Mode */}
          <div className="flex items-start gap-3">

            <div className="field-icon icon-purple">
              💳
            </div>

            <div className="flex-1">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Payment Mode
              </label>

              <select
                name="paymentmode"
                value={form.paymentmode}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >

                <option value="">
                  Select Payment Mode
                </option>

                <option value="UPI">
                  UPI
                </option>

                <option value="Cash">
                  Cash on Delivery
                </option>

                <option value="Credit Card">
                  Credit Card
                </option>

                <option value="Debit Card">
                  Debit Card
                </option>

                <option value="Net Banking">
                  Net Banking
                </option>

                <option value="Wallet">
                  Digital Wallet
                </option>

              </select>

            </div>

          </div>


          {/* Status */}
          <div className="flex items-start gap-3">

            <div className="field-icon icon-orange">
              🕐
            </div>

            <div className="flex-1">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >

                <option value="Pending">
                  Pending
                </option>

                <option value="Preparing">
                  Preparing
                </option>

                <option value="Out for Delivery">
                  Out for Delivery
                </option>

                <option value="Delivered">
                  Delivered
                </option>

              </select>

            </div>

          </div>


          {/* Submit & Cancel */}
          <div className="md:col-span-2 flex gap-3">

            <button
              type="submit"
              className="btn-add-order flex flex-1 items-center justify-center gap-2"
            >
              🛍️ {edit ? 'Update Order' : 'Add Order'}
            </button>

            {edit && (
              <button
                type="button"
                onClick={() => {
                  setEdit(null);
                  setForm({
                    customerName: '',
                    quntity: '',
                    status: '',
                    foodistem: '',
                    price: '',
                    paymentmode: ''
                  });
                }}
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                ✕ Cancel
              </button>
            )}

          </div>

        </form>

      </div>

    </div>
  )
}

export default OrderForm;