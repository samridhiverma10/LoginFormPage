import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username!: string;
  password!: string;
  loginApiEndpoint: string = 'http://login-api-url.com/api';

  constructor(private customService: AuthService) {}

  login() {
    this.customService.login(this.loginApiEndpoint, this.username, this.password)
      .subscribe(
        response => {
          console.log('Login successful:', response);
          // Handle successful login, e.g., redirect to dashboard
        },
        error => {
          console.error('Login failed:', error);
          // Handle login error, e.g., display error message
        }
      );
  }
}