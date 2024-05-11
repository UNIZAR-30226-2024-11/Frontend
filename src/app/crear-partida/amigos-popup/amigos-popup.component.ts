import { Component } from '@angular/core';
import { CrearPartidaComponent } from '../crear-partida.component';
import { ToastrService } from 'ngx-toastr';

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
  
  nombre_amigo = "Miguel Angel"; 
  nivel_amigo: number = 23; 

  /**
   * Constructor del componente AmigosPopupComponent.
   * @param crearPartidaComp Una instancia del componente CrearPartidaComponent.
   */
  constructor(private crearPartidaComp: CrearPartidaComponent, 
              private toastr: ToastrService) {}

  /**
   * Método para cerrar el popup de amigos.
   * Llama al método `closeAmigos` del componente CrearPartidaComponent.
   */
  closeAmigos_callback(){
     this.crearPartidaComp.closeAmigos();
  }

  /**
   * Método para invitar a un amigo a la partida.
   */
  invitar(){
    this.toastr.success('Invitación enviada', 'AMIGOS');
  }
}
