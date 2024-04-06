import { Component } from '@angular/core';
import { CrearPartidaComponent } from '../crear-partida.component';

@Component({
  selector: 'app-amigos-popup',
  standalone: true,
  imports: [CrearPartidaComponent],
  templateUrl: './amigos-popup.component.html',
  styleUrl: './amigos-popup.component.css'
})
export class AmigosPopupComponent {

  constructor(private crearPartidaComp: CrearPartidaComponent) {}

  closeAmigos_callback(){
     this.crearPartidaComp.closeAmigos();
  }
}
