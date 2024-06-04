import { Component } from '@angular/core';
import { FlujoComponent } from '../shop/flujo/flujo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-amigos',
  standalone: true,
  imports: [FlujoComponent, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './amigos.component.html',
  styleUrl: './amigos.component.css'
})

export class AmigosComponent {
  correoAbuscar: string = '';
  _id_usuario_buscado? : number;
  nombres: string[] = ['Juan', 'María', 'Pedro'];
  respuesta: string = '\n';
  usuarioCorrecto = false;
  noEncontrado: string = 'No se ha encontrado el usuario con correo: ';
  mensaje: string = '';
  solicitudes?: string[] = [];
  amigos: string[] = ['Álvaro', 'Ana', 'David'];

  private apiURL = 'https://backend-eg2q.onrender.com/api';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) {}

    // Envio id del usuario logeado
    // Recibo lista de nombres de los usuarios que han mandado solicitud de amistad al usuario logeado
    ngOnInit(): void {
      this.http.get<any>(`${this.apiURL}/friends/petition_list/${Number(localStorage.getItem('id'))}`).subscribe({
        next: (response) => {
          console.log('Lista de usuarios mandaron petición de amistad recibida correctamente');
          this.solicitudes = response.friend_requests;
        },
        error: (error) => {
          console.error('Error al obtener la lista de peticiones:', error);
        }
      });
    }

  buscarJugador() {
    this.http.get<any>(`${this.apiURL}/friends/search/${this.correoAbuscar}`).subscribe({
      next: (response) => {
        console.log('ID del usuario a buscar correctamente');
        this._id_usuario_buscado = response.id;
        console.log("ID recibido del usuario buscado: ", response.id);
        this.usuarioCorrecto = true;
        this.respuesta = response.username;
      },
      error: (error) => {
        console.error('Error al obtener el ID de un usuario:', error);
        this.usuarioCorrecto = false;
        this.mensaje = this.noEncontrado + ' ' + this.correoAbuscar;
        this.respuesta = this.mensaje // Ocultar el panel si no se encuentra el nombre
      }
    });
  }
    
    enviarSolicitud(): void {
      console.log("userId: ", Number(localStorage.getItem('id')), "friendId: ", this._id_usuario_buscado);
      this.http.post<any>(`${this.apiURL}/friends/request`, {userId: Number(localStorage.getItem('id')), friendId: this._id_usuario_buscado}).subscribe({
        next: (response) => {
          if(response.token){
            console.log('Se ha enviado la solicitud correctamente');
            this.toastr.success('Solicitud enviada correctamente', 'AMIGOS');
          }
          else{
            console.error('Error en la solicitud interna:');
            this.toastr.error('Error en la petición:', 'AMIGOS');
          }
        },
        error: (error) => {
          console.error('Error en la solicitud HTTP:', error);
          this.toastr.error('Error en la petición:', 'AMIGOS');
        }
      });
    }

    aceptarSolicitud(solicitud: string): void {
      /*
        // Agregar la solicitud a la lista de amigos
        this.amigos.push(solicitud);
        // Eliminar la solicitud de la lista
        this.solicitudes = this.solicitudes.filter(item => item !== solicitud);
      */
    }

    rechazarSolicitud(solicitud: string): void {
      /*
        // Eliminar la solicitud de la lista
        this.solicitudes = this.solicitudes.filter(item => item !== solicitud);
      */
    }

}
