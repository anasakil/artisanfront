import React from 'react';

const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.open("http://localhost:3001/api/users/google", "_self");
  };

  return (
    <button onClick={handleLogin} className=" text-white font-bold py-2 px-4 rounded" style={{ color: '#97644e' }}>
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
