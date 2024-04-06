import { Component } from '@angular/core';
import { Clipboard} from '@angular/cdk/clipboard'
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { AmigosPopupComponent } from './amigos-popup/amigos-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-partida',
  standalone: true,
  imports: [AmigosPopupComponent, CommonModule],
  templateUrl: './crear-partida.component.html',
  styleUrl: './crear-partida.component.css'
})


export class CrearPartidaComponent {
  codigoSala: string = '145334'; // Se deberá generar aleatoriamente??
  numJugadores: number = 0;
  public show_friendlist = false;

  constructor(private clipboard: Clipboard,
              private toastr: ToastrService,
              private dialogRef: MatDialog) {}

  copiarAlPortapapeles(codigo: string) {
    this.clipboard.copy(codigo);
    this.toastr.success('Copiado al portapapeles', 'CÓDIGO DE SALA');
  }

  openAmigos(){
    this.show_friendlist = true;
  }

  closeAmigos(){
    this.show_friendlist = false;
  }
}

