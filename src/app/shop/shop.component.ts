import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { FlujoComponent } from './flujo/flujo.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [DialogoConfirmacionComponent, FlujoComponent, HomeComponent, FormsModule, CommonModule],
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
  mensaje: string = 'SELECCIONADO'
  logosValor = 50;
  fondosValor = 100;
  barajasValor = 150;
  monedas = 300;

  comprarLogo(logosValor: number, monedas: number, i: number) {
    if (this.logos[i] == false && monedas >= logosValor) {
      this.logos[i] = true;
      this.monedas = monedas - logosValor;
      return monedas;
    }
    else{
      return monedas;
    }
  }

  getTextoLogos(i: number, logos: boolean[], seleccionLogo: boolean[]){
    if (logos[i] == true && seleccionLogo[i] == false) {
      return 'SELECCIONAR';
    } 
    if (logos[i] == false && seleccionLogo[i] == false) {
      return 'COMPRAR';
    }
    else {
      return this.mensaje;
    }
  }

  seleccionarLogo(i: number, logos: boolean[], seleccionLogo: boolean[]) {
    if (this.getTextoLogos(i, logos, seleccionLogo) == 'SELECCIONADO') {
        seleccionLogo[i] = false;
        this.getTextoLogos(i, logos, seleccionLogo) 
    }
    else if (this.getTextoLogos(i, logos, seleccionLogo) == 'SELECCIONAR') {
      // Primero, deseleccionamos todos los logos
      seleccionLogo.fill(false);
      // Luego, marcamos como seleccionado el logo en la posición i
      seleccionLogo[i] = true;
      this.getTextoLogos(i, logos, seleccionLogo) 
    }
  }

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

  getTextoBarajas(i: number){
    let encontrado = false;
    for(let i = 0; i < this.seleccionBaraja.length; i++){
      if (this.seleccionBaraja[i] == false){
        encontrado = false;
      }
      else{
        encontrado = true;
      }
    }
    if (this.barajas[i] = false){
      return 'COMPRAR';
    }
    else if(this.barajas[i] == true && !encontrado){
      return 'SELECCIONADO';
    }
    else if(this.barajas[i] = true && encontrado){
        return 'SELECCIONAR';
    }
    else {
      return 'COMPRAR';
    }
  }

  constructor(public dialogo: MatDialog) {}

  mostrarDialogoLogo(i: number): void {
    this.dialogo.open(DialogoConfirmacionComponent, {
      data: `¿Quieres comprar este logo de perfil?`
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (confirmado) {
        this.comprarLogo(this.logosValor, this.monedas, i);
      } 
      else {}
    });
  }


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