// src/components/common/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you're using Redux

export const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useSelector((state) => state.auth); // Adjust based on your state structure

  if (!user) {
    // User not logged in
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // User role not authorized for this route
    return <Navigate to="/" replace />; // Adjust as needed
  }

  return <Outlet />; // Authorized user, render child routes
};

