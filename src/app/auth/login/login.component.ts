import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token); // Guarda el token
        this.router.navigate(['/encrypt']); // Redirige a la página de encriptar
      },
      error: (err) => console.error('Login failed', err),
    });
  }
  
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
