import React from "react";
import "./App.css";
import { useState } from "react";
import OrderForm from "./OrderForm";
import RecievedData from "./RecievedData";

const App = () => {
  const [refresh,setRefresh] = useState(0);
  const [edit,setEdit] = useState(null);

  return (
    <div className="page-wrap">

      {/* Full-width hero banner */}
      <div className="food-title">

        <img
          className="food-photo photo-pizza"
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop&auto=format&q=80"
          alt="pizza"
        />

        <img
          className="food-photo photo-burger"
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop&auto=format&q=80"
          alt="burger"
        />

        <img
          className="food-photo photo-pasta"
          src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=380&h=380&fit=crop"
          alt="pasta"
        />

        <img
          className="food-photo photo-chicken"
          src="https://images.unsplash.com/photo-1562967914-608f82629710?w=340&h=340&fit=crop&auto=format&q=80"
          alt="chicken"
        />

        <img
          className="food-photo photo-roti"
          src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=340&h=340&fit=crop&auto=format&q=80"
          alt="roti with bhaji"
        />

        <div className="sauce-bowl">🍅</div>

        <p className="food-eyebrow">
          <span className="arrow">↝</span> Fresh • Fast • Delicious{" "}
          <span className="arrow">↜</span>
        </p>

        <h1>
          <span className="word-yellow">Food</span>{" "}
          <span className="word-white">Delivery</span>
          <br />
          <span className="word-yellow">App</span>
        </h1>

        <div className="food-ribbon">
          Good Food Good Mood ❤
        </div>

        <svg
          className="wave-bottom"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
            fill="#fdf1e6"
          />
        </svg>

      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5">

        <OrderForm
          setRefresh={setRefresh}
          edit={edit}
          setEdit={setEdit}
        />

        <RecievedData
          reload={refresh}
          setEdit={setEdit}
        />

      </div>

    </div>
  );
};

export default App;