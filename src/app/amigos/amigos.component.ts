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
  amigos?: string[] = [];

  private apiURL = 'https://backend-eg2q.onrender.com/api';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) {}

    ngOnInit(): void {

      // Obtener lista de peticiones de amistad
      this.http.get<any>(`${this.apiURL}/friends/petition_list/${Number(localStorage.getItem('id'))}`).subscribe({
        next: (response) => {
          console.log('Lista de usuarios mandaron petición de amistad recibida correctamente');
          this.solicitudes = response.friend_requests;
        },
        error: (error) => {
          console.error('Error al obtener la lista de peticiones:', error);
        }
      });

      // Obtenemos lista de amigos
      this.http.get<any>(`${this.apiURL}/friends/friends_list/${Number(localStorage.getItem('id'))}`).subscribe({
        next: (response) => {
          console.log('Lista de usuarios mandaron petición de amistad recibida correctamente');
          this.amigos = response.friends;
        },
        error: (error) => {
          console.error('Error al obtener la lista de peticiones:', error);
        }
      });
    }

  /**
   * Declines a friend request from a user.
   * 
   * @param usuario - The username of the user whose friend request is being declined.
   */
  declinarPeticion(usuario: string): void{
    this.http.post<any>(`${this.apiURL}/friends/petition_list/decline`, {userId: Number(localStorage.getItem('id')), username: usuario}).subscribe({
      next: (response) => {
        if(response.token){
          console.log('Se ha eliminado la peticion correctamente');
          if(this.solicitudes && this.solicitudes.length > 0){
            this.solicitudes = this.solicitudes.filter(item => item !== usuario);
            this.toastr.success('Peticion eliminada correctamente', 'AMIGOS');
          }
          else{
            this.toastr.success('No hay peticiones por eliminar', 'AMIGOS');
          }
        }
        else{
          console.error('Error al eliminar la peticion');
          this.toastr.error('Error al eliminar la peticion:', 'AMIGOS');
        }
      },
      error: (error) => {
        console.error('Error en la solicitud HTTP:', error);
        this.toastr.error('Error en la petición:', 'AMIGOS');
      }
    });
  }

  /**
   * 
   * @param usuario 
   */
  aceptarPeticion(usuario: string): void{
    this.http.post<any>(`${this.apiURL}/friends/petition_list/accept`, {userId: Number(localStorage.getItem('id')), username: usuario}).subscribe({
      next: (response) => {
        if(response.token){
          console.log('Se ha aceptado la peticion correctamente');
          if(this.solicitudes && this.solicitudes.length > 0){
            this.solicitudes = this.solicitudes.filter(item => item !== usuario);
            this.toastr.success('Peticion aceptada correctamente', 'AMIGOS');
          }
          else{
            this.toastr.success('No hay peticiones por aceptar', 'AMIGOS');
          }
        }
        else{
          console.error('Error al aceptar la peticion');
          this.toastr.error('Error al aceptar la peticion:', 'AMIGOS');
        }
      },
      error: (error) => {
        console.error('Error en la solicitud HTTP:', error);
        this.toastr.error('Error en la petición:', 'AMIGOS');
      }
    });
  }

  /**
   * Searches for a player based on their email address.
   * Retrieves the user ID of the searched player and updates the component's state accordingly.
   */
  buscarJugador(): void{
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
    
    /**
     * Sends a friend request to the specified user.
     */
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
  }
