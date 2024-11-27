import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Registration failed. Please try again.';
      },
    });
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
