import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PrivateCeo = () => {
  const isCeoAuthenticated = useSelector((state) => state.auth.isCeoAuthenticated)

  return isCeoAuthenticated ? <Outlet /> : <Navigate to='/home' />;
};

export default PrivateCeo;
