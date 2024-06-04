import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  correo: string = '';
  password: string = '';
  passwordMatch: boolean = true;
  private apiURL = 'https://backend-eg2q.onrender.com/api/';

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) { }

  login() {
    console.log("Iniciar sesión con correo:", this.correo, " y contraseña:", this.password);

    this.http.post<any>(`${this.apiURL}/login`, { email: this.correo, password: this.password })
      .subscribe({
        next: (response) => {
          if (response.token) {
            // Autenticación válida
            console.log("Token de respuesta recibido correctamente");
            console.log("ID recibido: ", response.id);
            this.cookieService.set('token', response.token);

            // Guardar información del usuario en localStorage
            localStorage.setItem('id', response.id);
            localStorage.setItem('user', JSON.stringify(this.correo));
            this.router.navigate(['/home']);
          } else {
            // Error de autenticacion
            console.error('Error en la autenticación del usuario', response.error);
          }
        },
        error: (error) => {
          console.error('Error en la solicitud HTTP:', error);
          this.passwordMatch = false;
        }
      });
  }
}
