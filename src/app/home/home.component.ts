import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserComponent } from '../profile/user/user.component';
import { LevelComponent } from '../profile/level/level.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ShopComponent } from '../shop/shop.component';

/**
 * Componente para la página de inicio.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserComponent, LevelComponent, TiendaComponent, ShopComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  /**
   * Método para manejar el clic del botón.
   * Navega a la ruta 'portada'.
   */
  btnClick() {
    this.router.navigate(['portada']); 
  }
}
