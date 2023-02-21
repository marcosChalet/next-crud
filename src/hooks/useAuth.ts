import LoginAuth from '@/backend/auth/LoginAuth';
import SignUpAuth from '@/backend/auth/SignUpAuth';
import { useRef } from 'react';

export default function useAuth() {
  const login = new LoginAuth();
  const signUp = new SignUpAuth();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function onSubmitIn(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    login.submit(email, password);
  }

  function loginRouteIn(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    login.routeOption();
  }

  function loginRouteUp(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    signUp.routeOption();
  }

  function onSubmitUp(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    if (password.length < 6) {
      alert('password must be more than 6 characters');
      return;
    }

    signUp.submit(email, password);
  }

  return {
    emailRef,
    passwordRef,
    onSubmitIn,
    onSubmitUp,
    loginRouteIn,
    loginRouteUp,
  };
}
