import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

const RequireAuth = ({ children }) => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  } else {
    dispatch(setUser(currentUser));
  }

  return children;
};

export default RequireAuth;
