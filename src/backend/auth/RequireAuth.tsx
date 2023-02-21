import React, { useEffect } from 'react';
import Login from '@/pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Home from '@/pages/Home';
import LoginAuth from './LoginAuth';

export default function RequireAuth() {
  const auth = useContext(AuthContext);
  const loginAuth = new LoginAuth();

  useEffect(() => {
    loginAuth.sessionRestore();
  }, []);

  if (!auth.user.isAuthenticated) {
    return <Login />;
  }
  return <Home />;
}
