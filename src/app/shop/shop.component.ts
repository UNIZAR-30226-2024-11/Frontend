import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente para la tienda de la aplicación.
 */
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  constructor(private router: Router) {}

  /**
   * Método para manejar el clic del botón.
   * Navega a la ruta 'home'.
   */
  btnClick() {
    this.router.navigate(['home']); 
  } 

  logos: boolean[] = [false, false, false, false, false];
  fondos: boolean[] = [false, false, false, false];
  seleccionLogo: boolean[] = [false, false, false, false, false];
  seleccionFondo: boolean[] = [false, false, false, false];
  logosValor = 50;
  fondosValor = 100;
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
        monedas = monedas - logosValor;
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
}
