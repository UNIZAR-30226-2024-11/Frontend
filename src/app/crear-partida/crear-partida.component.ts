import { Component } from '@angular/core';
import { Clipboard} from '@angular/cdk/clipboard'

@Component({
  selector: 'app-crear-partida',
  standalone: true,
  imports: [],
  templateUrl: './crear-partida.component.html',
  styleUrl: './crear-partida.component.css'
})
export class CrearPartidaComponent {
  codigoSala: string = '145334'; // Se deberá generar aleatoriamente??
  numJugadores: number = 0;

  constructor(private clipboard: Clipboard) {}

  copiarAlPortapapeles(codigo: string) {
    this.clipboard.copy(codigo);
  }
}
