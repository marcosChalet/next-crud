import React from 'react';
import { useState } from 'react';
import { AuthContext } from './AuthContext';
import User from '@/core/User';

type ChildrenType = { children: JSX.Element };

export const AuthProvider = (props: ChildrenType) => {
  const [user, setUser] = useState<User>(User.empty(''));

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
