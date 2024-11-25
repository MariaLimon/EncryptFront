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

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        console.log('User registered!');
        this.router.navigate(['/login']); // Redirige al login
      },
      error: (err) => console.error('Registration failed', err),
    });
  }
  
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
