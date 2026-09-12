import React from 'react';
import { useCart } from '../context/CartContext';


const Cart = ({ setCurrentPage }) => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, totalAmount, totalItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Your Cart is Empty</h2>
        <p>Browse products and add items to your cart.</p>
        <button
            onClick={() => setCurrentPage("products")}
            style={{
                 display: 'inline-block',
                 marginTop: '10px',
                 padding: '8px 16px',
                 background: '#2563eb',
                 color: '#fff',
                 border: 'none',
                 borderRadius: '4px',
                 cursor: 'pointer'
            }}
            >
            Shop Products
            </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '30px auto', padding: '0 20px' }}>
      <h2>Shopping Cart ({totalItems} items)</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
            <th style={{ padding: '12px' }}>Product</th>
            <th style={{ padding: '12px' }}>Price</th>
            <th style={{ padding: '12px' }}>Quantity</th>
            <th style={{ padding: '12px' }}>Subtotal</th>
            <th style={{ padding: '12px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const numericPrice = typeof item.price === 'string'
              ? parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
              : (item.price || 0);
            return (
              <tr key={item.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {item.image && <img src={item.image} alt={item.title || item.name} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />}
                  <span>{item.title || item.name}</span>
                </td>
                <td style={{ padding: '12px' }}>₹{numericPrice.toLocaleString()}</td>
                <td style={{ padding: '12px' }}>
                  <button onClick={() => decreaseQuantity(item.id)} style={{ padding: '4px 8px', marginRight: '5px' }}>-</button>
                  <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} style={{ padding: '4px 8px', marginLeft: '5px' }}>+</button>
                </td>
                <td style={{ padding: '12px' }}>₹{(numericPrice * item.quantity).toLocaleString()}</td>
                <td style={{ padding: '12px' }}>
                  <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ marginTop: '25px', textAlign: 'right', fontSize: '18px' }}>
        <p><strong>Total Items:</strong> {totalItems}</p>
        <p><strong>Total Amount:</strong> <span style={{ color: '#16a34a', fontSize: '22px' }}>₹{totalAmount.toLocaleString()}</span></p>
        <button style={{ padding: '10px 24px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
        onClick={() => setCurrentPage("payment")}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;