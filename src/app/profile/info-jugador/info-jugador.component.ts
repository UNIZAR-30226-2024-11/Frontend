import { Component } from '@angular/core';

@Component({
  selector: 'app-info-jugador',
  standalone: true,
  imports: [],
  templateUrl: './info-jugador.component.html',
  styleUrl: './info-jugador.component.css'
})

export class InfoJugadorComponent {
  nGanadas: number = 0; //Numero de partidas ganadas del usuario
  nJugadas: number = 0; //Numero de partidas jugadas del usuario
}
