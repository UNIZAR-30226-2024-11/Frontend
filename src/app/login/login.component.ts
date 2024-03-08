import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

interface LoginResponse {
  error?: string;
  token?: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';
  /*
  constructor(private http: HttpClient,
              private router: Router) {}
 
  login(): void {
    this.http.post<LoginResponse>('/api/login', { email: this.usuario, password: this.password })
      .pipe(
        catchError(error => {
          console.error('Error de inicio de sesión:', error);
          this.error = 'Error de inicio de sesión';
          return throwError(() => new Error(error)); 
        })
      )
      .subscribe(response => {
        if (response.error) {
          this.error = response.error;
        } else if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['home']);
        }
      });
  }
  */
}
