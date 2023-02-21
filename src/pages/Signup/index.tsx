import FormAuth from '@/components/form/FormAuth';
import FormInputGroup from '@/components/form/FormInputGroup';
import useLogin from '@/hooks/useAuth';
import React from 'react';

export default function SignUp() {
  const { emailRef, passwordRef, onSubmitUp, loginRouteUp } = useLogin();

  return (
    <div className="w-screen h-screen flex items-center bg-nosferatu font-bold">
      <FormAuth
        btnText={'create account'}
        titleText={'sign up'}
        onSubmit={onSubmitUp}
        newAuthOption={loginRouteUp}
        textAuthOption={'has an account?'}
      >
        <FormInputGroup inputRef={emailRef} dataType={'email'} />
        <FormInputGroup inputRef={passwordRef} dataType={'password'} />
      </FormAuth>
    </div>
  );
}
