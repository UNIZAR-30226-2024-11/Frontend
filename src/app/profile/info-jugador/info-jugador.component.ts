import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-jugador',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './info-jugador.component.html',
  styleUrls: ['./info-jugador.component.css']
})
export class InfoJugadorComponent implements OnInit {
  user: string = "";
  _id?: number;
  _username?: string;
  _email?: string;
  _avatar?: string;
  _level?: number;
  _games_won?: number;
  _games_played?: number;
  _coins?: number;
  private apiURL = 'https://backend-eg2q.onrender.com/api';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Obtenemos el usuario
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.user = JSON.parse(userJson);
    }
    const idJson = localStorage.getItem('id');

    this.http.get<any>(`${this.apiURL}/userdata/${idJson}`).subscribe({
      next: (userData) => {
        console.log('Datos del usuario recibidos correctamente');
        this._coins = userData.coins || 0;
        this._games_won = userData.games_won || 0;
        this._username = userData.username;
        this._email = userData.email;
        // Faltar asignar nJugadas aquí 
      },
      error: (error) => {
        console.error('Error al obtener los datos del usuario:', error);
      }
    });
  }
}

/*
  POSIBLES VALORES QUE SE PUEDE RECIBIR
  DEL BACKEND SOBRE EL USUARIO:
  -----------------------------------------
  id?: number;
  username?: string;
  email?: string;
  avatar?: string;
  level?: number;
  games_won?: number;
  coins?: number;
*/
