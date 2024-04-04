import axios from 'axios';

const API_URL = 'https://artisan-xqtv.onrender.com/api/admin/users/';

export const fetchUsersFromAPI = async () => {
  const token = localStorage.getItem('token'); 
  return await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
