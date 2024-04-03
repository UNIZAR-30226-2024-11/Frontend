import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlujoComponent } from '../flujo/flujo.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FlujoComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  constructor(private router: Router) {}

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