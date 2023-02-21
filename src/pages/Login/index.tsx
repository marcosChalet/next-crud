import FormAuth from '@/components/form/FormAuth';
import FormInputGroup from '@/components/form/FormInputGroup';
import useAuth from '@/hooks/useAuth';
import React from 'react';

export default function Login() {
  const { emailRef, passwordRef, onSubmitIn, loginRouteIn } = useAuth();

  return (
    <div className="w-screen h-screen flex items-center bg-nosferatu font-bold">
      <FormAuth
        btnText={'login'}
        titleText={'sign in'}
        onSubmit={onSubmitIn}
        newAuthOption={loginRouteIn}
        textAuthOption={'create account'}
      >
        <FormInputGroup inputRef={emailRef} dataType={'email'} />
        <FormInputGroup inputRef={passwordRef} dataType={'password'} />
      </FormAuth>
    </div>
  );
}
