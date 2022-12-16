import React from "react";
import { useNavigate } from "react-router-dom";
const OrderSumary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Order confirmed</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default OrderSumary;
