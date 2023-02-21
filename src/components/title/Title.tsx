import LoginAuth from '@/backend/auth/LoginAuth';
import React from 'react';
import Button from '../ui/Button';

type TypeProps = {
  children: React.ReactNode;
};

export default function Title(props: TypeProps) {
  const { signOut } = new LoginAuth();
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between items-center px-5">
        <h1 className="py-3 text-2xl font-bold">{props.children}</h1>
        <Button color="vonCount" onClick={signOut}>
          Logout
        </Button>
      </div>
      <hr className="border-2 border-purple-500" />
    </div>
  );
}
