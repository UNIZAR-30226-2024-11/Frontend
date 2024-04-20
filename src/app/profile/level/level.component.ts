import { Component } from '@angular/core';

/**
 * Componente para representar el nivel de un usuario.
 */
@Component({
  selector: 'app-level',
  standalone: true,
  imports: [],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})
export class LevelComponent {
  max_largo_barra = 140; // longitud maxima de la barra de exp en pixeles
  nivel: number = 0; // Nivel actual del usuario
  valorProgreso: number = 0; // Valor actual de progreso (experiencia) del usuario

  /**
   * Método para ajustar la longitud de la barra de progreso.
   * @param valor El valor a ajustar en la barra de progreso.
   */
  ajustarLongitudBarra(valor: number) {
    // 150 es el número máximo de pixeles que tiene la barra de progreso
    if(valor < this.max_largo_barra - this.valorProgreso){
      this.valorProgreso = this.valorProgreso + valor;
    }
    else {
      this.valorProgreso = valor - (this.max_largo_barra - this.valorProgreso);
      this.nivel = this.nivel + 1;
    }
  }

  /**
   * Método para incrementar el progreso (experiencia) del usuario.
   * @param valor El valor a incrementar en el progreso.
   */
  incrementar_progreso(valor: number) {
    this.ajustarLongitudBarra(valor);
  }
}
