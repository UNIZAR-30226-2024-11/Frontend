import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

/**
 * Componente para representar el nivel de un usuario.
 */
@Component({
  selector: 'app-level',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})

export class LevelComponent {
  max_largo_barra = 140; // longitud maxima de la barra de exp en pixeles
  nivel?: number; // Nivel actual del usuario
  valorProgreso: number = 40; // Valor actual de progreso (experiencia) del usuario
  private apiURL = 'https://backend-eg2q.onrender.com/api';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    const idJson = localStorage.getItem('id');

    this.http.get<any>(`${this.apiURL}/userdata/${idJson}`).subscribe({
       next: (userData) => {
         console.log('Datos del usuario recibidos correctamente');
         console.log('Nivel:', userData.level);
         this.nivel = userData.level;
         // Faltaria la experiencia del usuario, pero no se encuentra en el backend todavia
       },
       error: (error) => {
         console.error('Error al obtener los datos del usuario:', error);
       }
     });
  }

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
      if(this.nivel){
        this.nivel = this.nivel + 1;
      }
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
