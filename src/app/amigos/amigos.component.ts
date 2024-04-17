import { Component } from '@angular/core';
import { FlujoComponent } from '../shop/flujo/flujo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amigos',
  standalone: true,
  imports: [FlujoComponent, FormsModule, CommonModule],
  templateUrl: './amigos.component.html',
  styleUrl: './amigos.component.css'
})
export class AmigosComponent {
  nombreUsuario: string = '';
  nombres: string[] = ['Juan', 'María', 'Pedro'];
  respuesta: string = '\n';
  usuarioCorrecto: string = '';
  noEncontrado: string = 'No se ha encontrado el usuario';
  mensaje: string = '';

  verificarNombre() {
    // Verificar si el nombre introducido por el usuario está en la lista de nombres
    if (this.nombres.includes(this.nombreUsuario)) {
      this.usuarioCorrecto = this.nombreUsuario
      this.respuesta= this.nombreUsuario
    } else {
      this.usuarioCorrecto = this.nombreUsuario
      this.mensaje = this.noEncontrado + ' ' + this.usuarioCorrecto;
      this.respuesta = this.mensaje // Ocultar el panel si no se encuentra el nombre
    }
  }

}
