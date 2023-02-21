import User from '@/core/User';
import { createContext } from 'react';

type AuthContextType = {
  user: User;
  setUser: (user: User) => void;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = createContext<AuthContextType>(null!);
