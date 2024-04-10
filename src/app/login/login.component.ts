import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  correo: string = '';
  password: string = '';
  private apiURL = 'https://backend-eg2q.onrender.com:10000';

  constructor(private router: Router,
    private cookieService: CookieService,
    private http: HttpClient) { }

    login() {
      this.http.post<any>(`${this.apiURL}/login`, { email: this.correo, password: this.password })
        .subscribe({
          next: (response) => {
            if (response.token) {
              // Autenticación válida
              this.cookieService.set('token', response.token);
              this.router.navigate(['/home']);
            } else {
              // Error de autenticación
              console.error('Error en la autenticación del usuario', response.error);
            }
          },
          error: (error) => {
            console.error('Error en la solicitud HTTP:', error);
          }
        });
    }
}