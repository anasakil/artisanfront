import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute';
import Login from './components/auth/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import CategoryManagement from './components/admin/CategoryManagement';
import Register from './components/auth/Register';
import MoroccoMap from './Map/MoroccoMap';
import ProductsPage from './Map/productspage';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blogs from './pages/Blogs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions'; 
import Footer from './components/common/Footer';
import Checkout from './pages/Checkout';
import CreditCardForm from './pages/CreditCardForm'; 
import Guarantee from './pages/Guarantee';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ paddingBottom: '0rem' }}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MoroccoMap />} />
          <Route path="/products/:region" element={<ProductsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/CreditCardForm" element={<CreditCardForm />} />
          <Route path="/Guarantee" element={<Guarantee />} />


          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/categories" element={<CategoryManagement />} />
          </Route>
        </Routes>
        <Footer /> 
      </div>
    </BrowserRouter>
  );
};

export default App;
