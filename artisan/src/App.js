import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute';
import Login from './components/auth/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import Dashboard from './components/seller/Dashboard';
import CategoryManagement from './components/admin/CategoryManagement';
import Register from './components/auth/Register';
import MoroccoMap from './Map/MoroccoMap';
import ProductsPage from './Map/productspage';
import Home from './pages/Home';
import SellerManagement from './components/admin/SellerManagement';
// import Layout from './components/admin/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
         <Route path="/map" element={<MoroccoMap />} />
         <Route path="/products/:region" element={<ProductsPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route element={<Layout />}> */}

        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/categories" element={<CategoryManagement />} />
          <Route path="/admin/sellers" element={<SellerManagement />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={['seller']} />}>
          <Route path="/sellerdashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
