const jwtDecode = require('jwt-decode');


export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const clearToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};
// src/utils/auth.js

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};


export const getUserRole = () => {
  return localStorage.getItem('role');
};

export const saveUserRole = (role) => {
  localStorage.setItem('role', role);
};

export const getUserDetails = () => {
  const token = getToken();
  return token ? jwtDecode(token) : null;
};


export const clearUserRole = () => {
  localStorage.removeItem('role');
};
