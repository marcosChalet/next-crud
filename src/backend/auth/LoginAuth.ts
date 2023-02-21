import AbstractAuth from '@/core/AbstractAuth';
import User from '@/core/User';
import { useContext } from 'react';
import firebase from '../config';
import { AuthContext } from '../../context/AuthContext';

export default class LoginAuth extends AbstractAuth {
  auth = useContext(AuthContext);

  submit(email: string, password: string) {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(({ user }) => {
            const authUser = User.empty(user?.uid ?? '');
            authUser.isAuthenticated = true;
            authUser.email = email;
            authUser.password = password;
            authUser.emailVerified = user?.emailVerified ?? false;
            this.auth.setUser(authUser);
            console.log('SignIn...');
            this.router.push('/Home');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error...', errorMessage, errorCode);
            alert('Email or Password invalid!');
          });
      });
  }

  sessionRestore() {
    firebase.auth().onAuthStateChanged((user) => {
      const authUser = User.empty('');
      if (user) {
        authUser.uid = user?.uid ?? '';
        authUser.isAuthenticated = true;
        authUser.emailVerified = user.emailVerified;
        this.auth.setUser(authUser);
        console.log('Restore...');
      } else {
        this.auth.setUser(authUser);
        console.log('Session not restore');
      }
    });
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.auth.setUser(User.empty(''));
        console.log('SignOut...');
        this.router.push('/');
      })
      .catch((error) => {
        console.log('SignOut error...', error);
      });
  };

  routeOption() {
    this.router.push('/Signup');
  }
}
