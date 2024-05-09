import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username!: string;
  email!: string;
  password!: string;
  registerApiEndpoint: string = 'http://register-api-url.com/api';

  constructor(private customService: AuthService) {}

  register() {
    this.customService.register(this.registerApiEndpoint, this.username, this.email, this.password)
      .subscribe(
        response => {
          console.log('Registration successful:', response);
          // Handle successful registration, e.g., show success message
        },
        error => {
          console.error('Registration failed:', error);
          // Handle registration error, e.g., display error message
        }
      );
  }
}

