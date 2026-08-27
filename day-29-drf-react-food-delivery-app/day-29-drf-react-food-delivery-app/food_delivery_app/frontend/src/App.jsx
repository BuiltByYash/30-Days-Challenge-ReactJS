import React from 'react'
import './App.css'
import ShowOrder from '../components/ShowOrder'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <center>
        <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-slate-800">
          Food Delivery App
        </h1>

        <ShowOrder />
      </div>
      </center>
    </div>
  )
}

export default App
