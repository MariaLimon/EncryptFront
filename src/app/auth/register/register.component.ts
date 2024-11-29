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

  // Método para registrar al usuario
  register() {
    if (this.password.length < 8) {
      this.errorMessage = 'Password must be at least 8 characters long.';
      return;
    }

    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Registration failed. Please try again.';
      },
    });
  }

  // Navegar al formulario de inicio de sesión
  goToLogin() {
    this.router.navigate(['/login']);
  }

  // Validar y bloquear caracteres especiales en el campo de username
  validateUsername(event: KeyboardEvent) {
    const regex = /^[a-zA-Z0-9]*$/;
    const inputChar = event.key;
    if (!regex.test(inputChar)) {
      event.preventDefault(); // Bloquea la entrada del carácter no permitido
    }
  }
  validatePassword(event: KeyboardEvent) {
    const regex = /^[a-zA-Z0-9]*$/;
    const inputChar = event.key;
    if (!regex.test(inputChar)) {
      event.preventDefault(); // Bloquea la entrada del carácter no permitido
    }
  }
}
