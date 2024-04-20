import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


/**
 * Componente para la página de inicio de sesión.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  correo: string = '';
  password: string = '';
  passwordMatch: boolean = true;
  private apiURL = 'https://backend-eg2q.onrender.com/api/';

  constructor(private router: Router,
    private cookieService: CookieService,
    private http: HttpClient) { }

  /**
   * Método para realizar el inicio de sesión.
   * Hace una solicitud HTTP POST al servidor de backend para autenticar al usuario.
   * Si la autenticación es exitosa, guarda el token de autenticación en una cookie y redirige al usuario a la página de inicio.
   * En caso de error, maneja los errores y actualiza el estado de la contraseña coincidente.
   */
  login() {
    console.log("Iniciar sesión con correo:", this.correo, " y contraseña:", this.password);

    this.http.post<any>(`${this.apiURL}/login`, { email: this.correo, password: this.password })
      .subscribe({
        next: (response) => {
          if (response.token) {
            // Autenticación válida
            console.log("Token de respuesta recibido correctamente");
            this.cookieService.set('token', response.token);
            this.router.navigate(['/home']);
          } else {
            // Error de autenticación
            console.error('Error en la autenticación del usuario', response.error);
          }
        },
        error: (error) => {
          console.error('Error en la solicitud HTTP:', error);
          // Habrá que diferenciar que casos de error devuelve. 
          this.passwordMatch = false;
        }
      });
  }
}
