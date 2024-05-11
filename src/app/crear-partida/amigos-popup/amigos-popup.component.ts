import { Component } from '@angular/core';
import { CrearPartidaComponent } from '../crear-partida.component';

/**
 * Componente que representa un popup de amigos.
 */
@Component({
  selector: 'app-amigos-popup',
  standalone: true,
  imports: [CrearPartidaComponent],
  templateUrl: './amigos-popup.component.html',
  styleUrl: './amigos-popup.component.css'
})
export class AmigosPopupComponent {
  

  /**
   * Constructor del componente AmigosPopupComponent.
   * @param crearPartidaComp Una instancia del componente CrearPartidaComponent.
   */
  constructor(private crearPartidaComp: CrearPartidaComponent) {}

  /**
   * Método para cerrar el popup de amigos.
   * Llama al método `closeAmigos` del componente CrearPartidaComponent.
   */
  closeAmigos_callback(){
     this.crearPartidaComp.closeAmigos();
  }


}
