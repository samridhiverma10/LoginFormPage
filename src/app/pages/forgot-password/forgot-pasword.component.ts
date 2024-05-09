import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-pasword.component.html',
})
export class ForgotPasswordComponent {
  email!: string;
  forgotApiEndpoint: string = 'http://forgot-api-url.com/api';

  constructor(private customService: AuthService) {}

  forgotPassword() {
    this.customService.forgotPassword(this.forgotApiEndpoint, this.email)
      .subscribe(
        response => {
          console.log('Forgot password successful:', response);
          // Handle successful forgot password request, e.g., show success message
        },
        error => {
          console.error('Forgot password failed:', error);
          // Handle forgot password error, e.g., display error message
        }
      );
  }
}