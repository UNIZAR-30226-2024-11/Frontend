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
  noEncontrado: string = 'No se ha encontrado el correo: ';
  mensaje: string = '';
  solicitudes: string[] = ['Laura', 'Martín', 'Pablo', 'Carlos', 'Rafael'];
  amigos: string[] = ['Álvaro', 'Ana', 'David'];

  buscarJugador() {
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

  constructor() { }

    ngOnInit(): void {
    }

    aceptarSolicitud(solicitud: string): void {
        // Agregar la solicitud a la lista de amigos
        this.amigos.push(solicitud);
        // Eliminar la solicitud de la lista
        this.solicitudes = this.solicitudes.filter(item => item !== solicitud);
    }

    rechazarSolicitud(solicitud: string): void {
        // Eliminar la solicitud de la lista
        this.solicitudes = this.solicitudes.filter(item => item !== solicitud);
    }

}
