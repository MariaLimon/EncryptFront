import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = ''; // Nombre de usuario ingresado
  password = ''; // Contraseña ingresada
  errorMessage = ''; // Mensaje de error si el login falla

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        // Almacena el token en el almacenamiento local
        localStorage.setItem('token', res.token);

        // Redirige al usuario a la ruta protegida
        this.router.navigate(['/encrypt']);
      },
      error: (err) => {
        // Muestra un mensaje de error si el login falla
        this.errorMessage = err.error?.error || 'Login failed. Please try again.';
      },
    });
  }

  // Navega al formulario de registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
