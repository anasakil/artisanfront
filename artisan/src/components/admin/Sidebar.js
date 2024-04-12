import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <h1 className="text-3xl font-semibold text-center">Admin Panel</h1>
        <nav>
            <NavLink to="/adminDashboard" className={({ isActive }) => isActive ? "text-blue-500" : ""}>Dashboard</NavLink>
            <NavLink to="/admin/users" className={({ isActive }) => isActive ? "text-blue-500" : ""}>User Management</NavLink>
            <NavLink to="/admin/categories" className={({ isActive }) => isActive ? "text-blue-500" : ""}>Category Management</NavLink>
        </nav>
    </div>
  );
};

export default Sidebar;
