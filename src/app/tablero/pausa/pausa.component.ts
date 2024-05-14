import { Component } from '@angular/core';
import { TableroComponent } from '../tablero.component';

@Component({
  selector: 'app-pausa',
  standalone: true,
  imports: [TableroComponent],
  templateUrl: './pausa.component.html',
  styleUrl: './pausa.component.css'
})
export class PausaComponent {
  /**
   * Constructor del componente PausaComponent.
   * @param tableroComp Una instancia del componente TableroComponent.
   */
  constructor(private tableroComp: TableroComponent) {}

  /**
   * Método para cerrar la pantalla de pausa del juego.
   * Llama al método `closePausa` del componente TableroComponent.
   */
  closePausa_callback(){
     this.tableroComp.closePausa();
  }
}
