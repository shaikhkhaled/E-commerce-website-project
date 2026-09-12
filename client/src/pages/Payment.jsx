import React from 'react';
import { useCart } from '../context/CartContext';

const Payment = ({ setCurrentPage }) => {
  // Pull the exact totals from your existing cart context
  const { totalAmount, totalItems } = useCart();

  const handlePayment = () => {
    alert(`Payment of ₹${totalAmount.toLocaleString()} successful!`);
    setCurrentPage("products");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "30px", textAlign: "center", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <h2>Complete Payment</h2>
      <hr style={{ margin: "20px 0", border: "0.5px solid #eee" }} />
      
      <p style={{ fontSize: "18px" }}>Total Items: <strong>{totalItems}</strong></p>
      <p style={{ fontSize: "22px", marginBottom: "30px" }}>
        Total to Pay: <strong style={{ color: "#d32f2f" }}>₹{totalAmount.toLocaleString()}</strong>
      </p>

      <button
        onClick={handlePayment}
        style={{ padding: "12px 24px", background: "#4caf50", color: "white", border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer", width: "100%" }}
      >
        Pay ₹{totalAmount.toLocaleString()}
      </button>
    </div>
  );
};

export default Payment;