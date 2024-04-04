import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store  from './app/store';
// Removed unused PrivateRoute import
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import Login from './components/auth/Login';
import { isAuthenticated } from './utils/auth';

function App() {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    setAuthChecked(isAuthenticated());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/AdminDashboard" 
            element={
              authChecked ? <AdminDashboard /> : <Navigate to="/login" replace />
            } 
          />
            <Route 
              path="/admin/users" 
              element={isAuthenticated ? <UserManagement /> : <Navigate to="/login" replace />}
            />
          <Route path="/" element={authChecked ? <Navigate to="/AdminDashboard" replace /> : <Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
