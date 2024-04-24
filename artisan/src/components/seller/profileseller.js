import React, { useState, useEffect } from 'react';
import { Card, Avatar, Spin, Alert } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://localhost:3001/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data);
        } else {
          throw new Error(data.message || 'Failed to fetch the profile');
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message="Error" description={error} type="error" showIcon />;

  return (
    <Card
      bordered={false}
      style={{ width: 300 }}
      actions={[
        <div>Email: {user?.email}</div>,
        <div>Role: {user?.role}</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar size="large" icon={<UserOutlined />} />}
        title={user?.username}
        description={`Subscription Status: ${user?.subscriptionStatus}`}
      />
    </Card>
  );
};

export default UserProfile;
