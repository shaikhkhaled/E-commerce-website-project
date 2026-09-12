import { useState } from "react";

function Users() {
  const [users] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "user",
      phone: "9876543210"
    },
    {
      id: 2,
      name: "Amit Patil",
      email: "amit@gmail.com",
      role: "user",
      phone: "9876543211"
    },
    {
      id: 3,
      name: "Priya Singh",
      email: "priya@gmail.com",
      role: "user",
      phone: "9876543212"
    },
    {
      id: 4,
      name: "Admin",
      email: "admin@shopzone.com",
      role: "admin",
      phone: "9876543213"
    }
  ]);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Users</h1>
          <p>Manage registered users</p>
        </div>

        <button className="primary-btn">
          + Add User
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>#{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <span className={`role ${user.role}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
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

export default Users;