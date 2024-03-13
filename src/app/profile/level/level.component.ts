import { Component } from '@angular/core';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})

export class LevelComponent {
  max_largo_barra = 140; // longitud maxima de la barra de exp en pixeles
  nivel: number = 0; // Esto se igualará al nivel del usuario
  valorProgreso: number = 0; // Esto se igualará a la XP del usuario

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

  incrementar_progreso(valor: number) {
    this.ajustarLongitudBarra(valor);
  }
}
