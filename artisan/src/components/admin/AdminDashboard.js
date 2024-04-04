import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/admin/users">User Management</Link></li>
        <li><Link to="/admin/sellers">Seller Management</Link></li>
        <li><Link to="/admin/categories">Category Management</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
