import { useState } from "react";

function Orders() {
  const [orders] = useState([
    {
      id: "ORD001",
      customer: "Rahul Sharma",
      date: "05 Sep 2026",
      amount: 5498,
      payment: "Paid",
      status: "Delivered"
    },
    {
      id: "ORD002",
      customer: "Amit Patil",
      date: "06 Sep 2026",
      amount: 2999,
      payment: "Paid",
      status: "Shipped"
    },
    {
      id: "ORD003",
      customer: "Priya Singh",
      date: "06 Sep 2026",
      amount: 799,
      payment: "Pending",
      status: "Processing"
    },
    {
      id: "ORD004",
      customer: "Rahul Sharma",
      date: "07 Sep 2026",
      amount: 3999,
      payment: "Paid",
      status: "Delivered"
    },
    {
      id: "ORD005",
      customer: "Amit Patil",
      date: "07 Sep 2026",
      amount: 1999,
      payment: "Failed",
      status: "Cancelled"
    },
    {
      id: "ORD006",
      customer: "Priya Singh",
      date: "08 Sep 2026",
      amount: 2499,
      payment: "Paid",
      status: "Shipped"
    },
    {
      id: "ORD007",
      customer: "Rahul Sharma",
      date: "08 Sep 2026",
      amount: 1499,
      payment: "Paid",
      status: "Processing"
    },
    {
      id: "ORD008",
      customer: "Amit Patil",
      date: "09 Sep 2026",
      amount: 999,
      payment: "Paid",
      status: "Delivered"
    },
    {
      id: "ORD009",
      customer: "Priya Singh",
      date: "09 Sep 2026",
      amount: 2999,
      payment: "Pending",
      status: "Pending"
    }
  ]);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Orders</h1>
          <p>Manage customer orders</p>
        </div>
      </div>

      <div className="order-summary">
        <div>
          <span>Total Orders</span>
          <strong>{orders.length}</strong>
        </div>

        <div>
          <span>Paid Orders</span>
          <strong>
            {orders.filter(
              (order) => order.payment === "Paid"
            ).length}
          </strong>
        </div>

        <div>
          <span>Delivered</span>
          <strong>
            {orders.filter(
              (order) => order.status === "Delivered"
            ).length}
          </strong>
        </div>

        <div>
          <span>Total Revenue</span>
          <strong>
            ₹
            {orders
              .filter((order) => order.payment === "Paid")
              .reduce(
                (total, order) => total + order.amount,
                0
              )
              .toLocaleString()}
          </strong>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <b>{order.id}</b>
                </td>

                <td>{order.customer}</td>

                <td>{order.date}</td>

                <td>
                  ₹{order.amount.toLocaleString()}
                </td>

                <td>
                  <span
                    className={`status ${order.payment.toLowerCase()}`}
                  >
                    {order.payment}
                  </span>
                </td>

                <td>
                  <span
                    className={`status ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>
                  <button className="view-btn">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;