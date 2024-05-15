import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PausaComponent } from './pausa/pausa.component';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [PausaComponent, FormsModule, CommonModule],
  templateUrl: './tablero.component.html',
  styleUrl: './tablero.component.css'
})
export class TableroComponent {
  mensajes: string[] = [];
  mensaje: string = '';
  public show_pausa = false;

  constructor(private clipboard: Clipboard, private toastr: ToastrService,
              private dialogRef: MatDialog) {}

  ngOnInit(): void {}
          
  agnadirMensaje(): void {
    this.mensajes.push(this.mensaje);
    this.mensaje = '';
  }

  /**
   * Método para abrir la pantalla de pausa
   */
  openPausa(){
    this.show_pausa = true;
  }

  /**
   * Método para cerrar la pantalla de pausa
   */
  closePausa(){
    this.show_pausa = false;
  }
}
