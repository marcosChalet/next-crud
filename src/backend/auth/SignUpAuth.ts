import firebase from '../config';
import AbstractAuth from '@/core/AbstractAuth';

export default class SignUpAuth extends AbstractAuth {
  submit(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user?.sendEmailVerification();
        this.router.push('/Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error...', errorMessage, errorCode);
      });
  }

  routeOption() {
    this.router.push('/Login');
  }
}
