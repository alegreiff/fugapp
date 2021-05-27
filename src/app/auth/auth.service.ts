import { StateService } from './../estado/state.service';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private estado: StateService) {}

  async loginGugol() {
    try {
      return this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (error) {
      console.log('la cagué', error);
    }
  }

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Nice, it worked!');
        //this.router.navigateByUrl('/profile');
      })
      .catch((err) => {
        console.log('Something went wrong: ', err.message);
      });
  }

  emailSignup(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Sucess', value);
        //this.router.navigateByUrl('/profile');
      })
      .catch((error) => {
        console.log('Something went wrong: ', error);
      });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({ hd: 'fuga.gov.co' });
    provider.setCustomParameters({ prompt: 'select_account' });
    //this.AuthLogin(provider);

    return from(
      this.afAuth
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return this.afAuth.signInWithPopup(provider).then((res) => {
            let admin: boolean = false;
            let editor: boolean = false;

            const Usuario = {
              uid: res.user.uid,
              email: res.user.email,
              displayName: res.user.displayName,

              photoURL: res.user.photoURL,
              editor,
              admin,
            };

            console.log(Usuario);
            this.estado.setUser(Usuario);
            return Object(Usuario);
          });
        })
    );
  }

  logout() {
    this.afAuth.signOut();
    this.estado.setInitialState();
  }

  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider);
  }
}
