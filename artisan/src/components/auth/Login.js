import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      const resultAction = await dispatch(loginUser(userData));
      if (loginUser.fulfilled.match(resultAction)) {
        const { role } = resultAction.payload;
        if (role === 'admin') {
          navigate('/AdminDashboard');
        } else {
          navigate('/user-dashboard');
        }
      } else {
        throw new Error('Login failed');
      }
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {status === 'failed' && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
