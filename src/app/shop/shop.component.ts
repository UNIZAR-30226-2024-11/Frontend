import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { FlujoComponent } from './flujo/flujo.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * Componente para la tienda de la aplicación.
 */
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [DialogoConfirmacionComponent, FlujoComponent, HomeComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent { 

  logos: boolean[] = [false, false, false, false, false];
  fondos: boolean[] = [false, false, false, false];
  barajas: boolean[] = [false, false, false, false];
  seleccionLogo: boolean[] = [false, false, false, false, false];
  seleccionFondo: boolean[] = [false, false, false, false];
  seleccionBaraja: boolean[] = [false, false, false, false];
  logosValor = 50;
  fondosValor = 100;
  barajasValor = 150;
  monedas = 300;

  /**
   * Método para comprar un logo.
   * @param logosValor El valor del logo a comprar.
   * @param monedas El número de monedas del usuario.
   * @param i El índice del logo.
   * @returns El número actualizado de monedas después de la compra.
   */
  comprarLogo(logosValor: number, monedas: number, i: number) {
    if (this.logos[i] == true){    
      return monedas;
    }
    else if (monedas >= logosValor) {
        this.logos[i] = true;
        this.monedas = monedas - logosValor;
        return monedas;
    } else {
        return monedas;
    }
  }

  /**
   * Método para comprar un fondo.
   * @param fondosValor El valor del fondo a comprar.
   * @param monedas El número de monedas del usuario.
   * @param i El índice del fondo.
   * @returns El número actualizado de monedas después de la compra.
   */
  comprarFondo(fondosValor: number, monedas: number, i: number) {
    if (this.fondos[i] == true){    
      return monedas;
    }
    else if (monedas >= fondosValor) {
        this.fondos[i] = true;
        this.monedas = monedas - fondosValor;
        return monedas;
    } else {
        return monedas;
    }
  }

  /**
   * Método para comprar una baraja.
   * @param barajasValor El valor de la baraja a comprar.
   * @param monedas El número de monedas del usuario.
   * @param i El índice de la baraja.
   * @returns El número actualizado de monedas después de la compra.
   */
  comprarBaraja(barajasValor: number, monedas: number, i: number) {
    if (this.barajas[i] == true){    
      return monedas;
    }
    else if (monedas >= barajasValor) {
        this.barajas[i] = true;
        this.monedas = monedas - barajasValor;
        return monedas;
    } else {
        return monedas;
    }
  }

  /**
   * Método para obtener el texto de los botones de los logos.
   * @param i El índice del logo.
   * @returns El texto del botón correspondiente al logo.
   */
  getTextoLogos(i: number){
    let encontrado = false;
    for(let i = 0; i < this.seleccionLogo.length; i++){
      if (this.seleccionLogo[i] == false){
        encontrado = false;
      }
      else{
        encontrado = true;
      }
    }
    if (this.logos[i] = false){
      return 'COMPRAR';
    }
    else if(this.logos[i] == true && !encontrado){
      return 'SELECCIONADO';
    }
    else if(this.logos[i] = true && encontrado) {
        return 'SELECCIONAR';
    }
    else {
      return 'COMPRAR'
    }
  }

  /**
   * Método para obtener el texto de los botones de los fondos.
   * @param i El índice del fondo.
   * @returns El texto del botón correspondiente al fondo.
   */
  getTextoFondos(i: number){
    let encontrado = false;
    for(let i = 0; i < this.seleccionFondo.length; i++){
      if (this.seleccionFondo[i] == false){
        encontrado = false;
      }
      else{
        encontrado = true;
      }
    }
    if (this.fondos[i] = false){
      return 'COMPRAR';
    }
    else if(this.fondos[i] == true && !encontrado){
      return 'SELECCIONADO';
    }
    else if(this.logos[i] = true && encontrado){
        return 'SELECCIONAR';
    }
    else {
      return 'COMPRAR';
    }
  }

  constructor(public dialogo: MatDialog) {}

  /**
   * Método para mostrar un diálogo de confirmación para comprar un logo.
   * @param i El índice del logo.
   */
  mostrarDialogoLogo(i: number): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Quieres comprar este logo de perfil?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.comprarLogo(this.logosValor, this.monedas, i);
        } else {
        }
      });
  }

  /**
   * Método para mostrar un diálogo de confirmación para comprar un fondo.
   * @param i El índice del fondo.
   */
  mostrarDialogoFondo(i: number): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Quieres comprar este fondo de tablero?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.comprarFondo(this.fondosValor, this.monedas, i);
        } else {
        }
      });
  }

  /**
   * Método para mostrar un diálogo de confirmación para comprar una baraja.
   * @param i El índice de la baraja.
   */
  mostrarDialogoBaraja(i: number): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Quieres comprar esta baraja?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.comprarFondo(this.barajasValor, this.monedas, i);
        } else {
        }
      });
  }
}
