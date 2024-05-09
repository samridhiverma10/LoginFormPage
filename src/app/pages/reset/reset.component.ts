import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetPasswordComponent {
  email!: string;
  resetApiEndpoint: string = 'http://reset-api-url.com/api';

  constructor(private customService: AuthService) {}

  resetPassword() {
    this.customService.resetPassword(this.resetApiEndpoint, this.email)
      .subscribe(
        response => {
          console.log('Password reset successful:', response);
          // Handle successful password reset, e.g., show success message
        },
        error => {
          console.error('Password reset failed:', error);
          // Handle password reset error, e.g., display error message
        }
      );
  }
}