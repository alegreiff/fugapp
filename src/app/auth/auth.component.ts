import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  ui: firebaseui.auth.AuthUI;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  loginGoogle() {
    const OKA = this.authService.googleLogin();
    OKA.subscribe((res) => {
      console.log('RESULTADO: ', res);
    });
  }
  sale() {
    this.authService.logout();
  }
}
