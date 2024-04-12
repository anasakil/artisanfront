import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, updateUser, deleteUser, createUser, usersSelector } from '../../features/users/usersSlice';

const UserManagement = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(usersSelector);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null);
  const [newUser, setNewUser] = useState({ username: '', email: '' });

  useEffect(() => {
    document.title = "welcome admin ";

    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleUpdate = (user) => {
    const userId = user._id || user.id;
    setUserToUpdate({ ...user, id: userId });
    setShowUpdateForm(true);
  };
  

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: userToUpdate._id, user: userToUpdate }));
    setShowUpdateForm(false);
    setUserToUpdate(null);
  };
  

  const handleCreateUser = () => {
    setShowCreateForm(true);
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(newUser));
    setShowCreateForm(false);
    setNewUser({ username: '', email: '' });
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error}</p>;

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={handleCreateUser}>Create User</button>
      {showCreateForm && (
        <div>
          <h2>Create User</h2>
          <form onSubmit={handleCreateSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </label>
            <button type="submit">Create</button>
            <button type="button" onClick={() => setShowCreateForm(false)}>Cancel</button>
          </form>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id || user.id}>
              <td>{user._id || user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user._id || user.id)}>Delete</button>
                <button onClick={() => handleUpdate(user)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showUpdateForm && userToUpdate && (
        <div>
          <h2>Update User</h2>
          <form onSubmit={handleUpdateSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={userToUpdate.username}
                onChange={(e) => setUserToUpdate({ ...userToUpdate, username: e.target.value })}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={userToUpdate.email}
                onChange={(e) => setUserToUpdate({ ...userToUpdate, email: e.target.value })}
              />
            </label>
            <button type="submit">Update</button>
            <button type="button" onClick={() => setShowUpdateForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
