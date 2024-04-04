import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, usersSelector } from '../../features/users/usersSlice';

const UserManagement = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error}</p>;

  return (
    <div>
      <h1>User Management</h1>
      <ul>
        {users && users.map(user => (
          <li key={user.id || user._id}>{user.username} - {user.email}</li>
         
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
