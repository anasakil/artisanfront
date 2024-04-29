import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import { Form, Input, Button, Typography, Alert } from 'antd';

const { Title, Text } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { status, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onFinish = async () => {
    try {
      const resultAction = await dispatch(loginUser({ email, password }));
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
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      background: '#F5F5F5',
    }}>
      <div style={{ 
        maxWidth: '400px',
        width: '100%',
        padding: '2rem',
        borderRadius: '8px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem', color: '#97644e' }}>Sign in to Your Account</Title>
        {status === 'failed' && <Alert message={error} type="error" style={{ marginBottom: '1rem' }} />}
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email!' }]}
          >
            <Input placeholder="Enter your email" value={email} onChange={handleEmailChange} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%', background: '#97644e', border: 'none', }}>Sign In</Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center', margin: '1rem 0',  }}>
          <Text style={{ color: '#97644e',fontSize: '1.2rem' }}>or </Text>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <GoogleLoginButton  />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Text>Don't have an account? <a href="/register" style={{ color: '#97644e' }}>Sign up here</a></Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
