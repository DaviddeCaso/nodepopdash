// src/components/LogoutButton.js
import React from 'react';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <button type="button" onClick={handleLogout}>
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;

