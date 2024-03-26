import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  usuario: string = '';
  correo: string = '';
  password: string = '';
  password_confirm: string = '';
  passwordsMatch: boolean = true;
  private apiURL = 'http://localhost:5432'; 

  constructor(private router: Router,
              private cookieService: CookieService,
              private http: HttpClient) { }

  register() {
    if (this.password == this.password_confirm){
      this.http.post<any>(`${this.apiURL}/register`, { username: this.usuario,  email: this.correo, 
                                                      password: this.password })
        .subscribe(response => {
          if (response.token) {
            // Registro válido
            this.cookieService.set('token', response.token);
            this.router.navigate(['/home']);
          } else {
            // Error en registro
            console.error('Error en registro de usuario', response.error);
          }
        }, error => {
          console.error('Error en la solicitud HTTP:', error);
        });
    } else {
      // Notificar al usuario que las contraseñas no coinciden
      this.passwordsMatch = false;
    }
  }
}
