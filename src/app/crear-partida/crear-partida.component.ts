import { Component } from '@angular/core';
import { Clipboard} from '@angular/cdk/clipboard'
import { ToastrService } from 'ngx-toastr';

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

  constructor(private clipboard: Clipboard,
              private toastr: ToastrService) {}

  copiarAlPortapapeles(codigo: string) {
    this.clipboard.copy(codigo);
    this.toastr.success('Copiado al portapapeles', 'CÓDIGO DE SALA');
  }
}
